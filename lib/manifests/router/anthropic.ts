import { RouterManifest } from '@/lib/types'

export const manifest: RouterManifest = {
  name: 'Anthropic',
  category: 'router',
  items: [
    {
      id: '8MX7zMb',
      provider: 'LlamaIndex',
      vendor: 'Anthropic',
      model: 'claude-3-haiku',
      description: 'Light and fast',
      skills: ['chat', 'rag', 'tools', 'agent'],
      lmsys: {
        rank: 11,
        elo: 1181,
        ci: '+3/-3',
        votes: 66065,
        license: 'Proprietary',
        knowledgeCutoff: '2023/8',
      },
      costPerMTok: {
        input: 0.25,
        output: 1.25,
      },
    },
    {
      id: '20XdZSk',
      provider: 'LlamaIndex',
      model: 'claude-3-sonnet',
      description: 'Hard working',
      vendor: 'Anthropic',
      skills: ['chat', 'rag', 'tools', 'agent'],
      lmsys: {
        rank: 6,
        elo: 1202,
        ci: '+3/-3',
        votes: 75418,
        license: 'Proprietary',
        knowledgeCutoff: '2023/8',
      },
      costPerMTok: {
        input: 3,
        output: 15,
      },
    },
    {
      id: 'D4RG4tT',
      provider: 'LlamaIndex',
      model: 'claude-3-opus',
      description: 'Powerful',
      vendor: 'Anthropic',
      skills: ['chat', 'tools', 'rag', 'agent'],
      lmsys: {
        rank: 2,
        elo: 1251,
        ci: '+3/-3',
        votes: 75684,
        license: 'Proprietary',
        knowledgeCutoff: '2023/8',
      },
      costPerMTok: {
        input: 15,
        output: 75,
      },
    },
    {
      id: 'eCl9GHl',
      provider: 'LlamaIndex',
      model: 'claude-2.1',
      description: '?',
      vendor: 'Anthropic',
      skills: ['chat'],
      lmsys: {
        rank: 25,
        elo: 1119,
        ci: '+4/-3',
        votes: 39744,
        license: 'Proprietary',
      },
      costPerMTok: {
        input: 15,
        output: 75,
      },
    },
    {
      id: 'GNZEekX',
      provider: 'LlamaIndex',
      model: 'claude-instant-1.2',
      description: '',
      vendor: 'Anthropic',
      skills: ['chat', 'tools', 'rag', 'agent'],
      lmsys: {
        rank: 31,
        elo: 1110,
        ci: '+4/-5',
        votes: 21559,
        license: 'Proprietary',
      },
      costPerMTok: {
        input: 15,
        output: 75,
      },
    },
  ],
}