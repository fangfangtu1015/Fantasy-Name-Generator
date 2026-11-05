// D&D Backstory Generator API Function
// This function generates character backstories using AI

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers, status: 204 });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      headers,
      status: 405,
    });
  }

  try {
    const body = await req.json();
    const { name, race, class: charClass, background, alignment, level, elements, customDetails } = body;

    // Validate required fields
    if (!race || !charClass || !background || !alignment) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        headers,
        status: 400,
      });
    }

    // Generate backstory using AI
    const backstory = await generateBackstoryWithAI({
      name,
      race,
      class: charClass,
      background,
      alignment,
      level,
      elements: elements || [],
      customDetails,
    });

    return new Response(JSON.stringify({ backstory }), {
      headers,
      status: 200,
    });
  } catch (error) {
    console.error('Error generating backstory:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate backstory' }), {
      headers,
      status: 500,
    });
  }
}

async function generateBackstoryWithAI(params: {
  name?: string;
  race: string;
  class: string;
  background: string;
  alignment: string;
  level: number;
  elements: string[];
  customDetails?: string;
}): Promise<string> {
  // Get API key from environment
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    // Fallback to template-based generation if no API key
    return generateTemplateBackstory(params);
  }

  try {
    const prompt = buildPrompt(params);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a creative D&D storyteller. Generate engaging, detailed character backstories that fit the D&D 5e fantasy setting. Write in second person perspective, addressing the character as "you". Make the backstory compelling with specific details, emotional depth, and hooks for adventure. Keep it between 500-800 words.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error('AI API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('AI generation failed, using template:', error);
    return generateTemplateBackstory(params);
  }
}

function buildPrompt(params: {
  name?: string;
  race: string;
  class: string;
  background: string;
  alignment: string;
  level: number;
  elements: string[];
  customDetails?: string;
}): string {
  const characterName = params.name || 'a mysterious adventurer';
  const elementList = params.elements.length > 0 
    ? `Include these elements in the story: ${params.elements.join(', ')}.` 
    : '';
  const customList = params.customDetails 
    ? `Additional details to incorporate: ${params.customDetails}` 
    : '';

  return `Generate a backstory for a level ${params.level} ${params.race} ${params.class} named ${characterName} with a ${params.background} background and ${params.alignment} alignment.

${elementList}
${customList}

The backstory should:
- Explain their origin and early life
- Describe how they learned their class abilities
- Include at least one significant event that shaped them
- Establish their motivation for adventuring
- Create hooks for future story development
- Feel authentic to D&D 5e lore and setting

Write in second person ("You grew up...", "You learned...", etc.).`;
}

function generateTemplateBackstory(params: {
  name?: string;
  race: string;
  class: string;
  background: string;
  alignment: string;
  level: number;
  elements: string[];
  customDetails?: string;
}): string {
  // Fallback template-based generation
  const name = params.name || 'the adventurer';
  const race = params.race.toLowerCase();
  const charClass = params.class.toLowerCase();
  const background = params.background.toLowerCase();
  
  const homelands: Record<string, string[]> = {
    'human': ['a bustling city', 'a quiet village', 'a trading post', 'a coastal town'],
    'elf': ['an ancient forest', 'a secluded enclave', 'a magical grove', 'a moonlit glade'],
    'dwarf': ['a mountain hold', 'a deep mining colony', 'a stone fortress', 'an underground city'],
    'halfling': ['a peaceful shire', 'a farming community', 'a riverside village', 'a cozy hamlet'],
    'dragonborn': ['a dragon clan territory', 'a volcanic region', 'a ancient ruin', 'a warrior camp'],
    'gnome': ['a tinker workshop', 'a forest burrow', 'a magical academy', 'a hidden enclave'],
    'half-elf': ['a human town', 'an elven forest', 'a border community', 'a cosmopolitan city'],
    'half-orc': ['an orc stronghold', 'a human settlement', 'a frontier town', 'a mercenary camp'],
    'tiefling': ['a large city', 'a tolerant town', 'a hidden enclave', 'a traveling circus'],
    'aasimar': ['a temple community', ['a holy city', 'a blessed village', 'a celestial-touched town']],
    'genasi': ['an elemental realm', 'a coastal city', 'a volcanic region', 'a windy plateau'],
    'goblin': ['a tribal warren', 'a hidden cave', 'a scavenger camp', 'a underground tunnel'],
    'kobold': ['a dragon\'s lair', 'a mining tunnel', 'a pack territory', 'a volcanic warren'],
    'lizardfolk': ['a swamp territory', 'a river delta', 'a tropical marsh', 'a primordial wetland'],
    'tabaxi': ['a tropical jungle', 'a trading city', 'a port town', 'a exotic marketplace'],
    'firbolg': ['a deep forest', 'a giant\'s old path', 'a mystical grove', 'a hidden valley'],
  };

  const homeland = pick(homelands[race] || ['a distant land']);
  
  let backstory = `You grew up in ${homeland}, where life was ${pick(['simple', 'challenging', 'peaceful', 'tumultuous'])}. `;
  
  backstory += `As a ${race}, you learned early that ${pick(['strength matters', 'cunning survives', 'community protects', 'knowledge empowers'])}. `;
  
  backstory += `Your journey as a ${charClass} began when ${pick([
    'you discovered an ancient text',
    'a mentor took you under their wing',
    'you witnessed something that changed you forever',
    'you were forced to defend what you loved',
    'a divine vision called to you',
  ])}. `;
  
  backstory += `Through ${pick(['years of training', 'hard-won experience', 'natural talent', 'desperate necessity'])}, you mastered the skills that define you today. `;
  
  if (params.elements.includes('family')) {
    backstory += `Your family ${pick(['still waits for your return', 'was torn apart by tragedy', 'believes in your destiny', 'never understood your choices'])}. `;
  }
  
  if (params.elements.includes('mentor')) {
    backstory += `A wise ${pick(['elder', 'warrior', 'mage', 'priest'])} taught you ${pick(['the value of patience', 'how to fight with honor', 'the secrets of the ancients', 'to trust your instincts'])}. `;
  }
  
  if (params.elements.includes('tragedy')) {
    backstory += `Tragedy struck when ${pick(['your home was destroyed', 'a loved one was lost', 'you failed to protect someone', 'betrayal cut deep'])}. `;
    backstory += `This loss ${pick(['hardened your resolve', 'left scars that never healed', 'drove you to seek justice', 'taught you the cost of failure'])}. `;
  }
  
  backstory += `Now, as a level ${params.level} adventurer, you ${pick([
    'seek to make your mark on the world',
    'search for answers to questions that haunt you',
    'fight to protect those who cannot protect themselves',
    'pursue a destiny that has been foretold',
  ])}. `;
  
  backstory += `Your ${background} background gave you ${pick(['skills in survival', 'knowledge of the world', 'connections to powerful people', 'a unique perspective on life'])}. `;
  
  backstory += `As someone with a ${params.alignment} alignment, you believe that ${pick([
    'order must be maintained',
    'freedom is paramount',
    'good must triumph over evil',
    'balance is the key to survival',
  ])}. `;
  
  backstory += `The road ahead is uncertain, but you are ready. ${pick([
    'Your story is just beginning.',
    'Adventure awaits around every corner.',
    'The world needs heroes like you.',
    'Your destiny calls.',
  ])}`;
  
  return backstory;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
