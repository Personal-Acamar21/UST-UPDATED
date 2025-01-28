import type { NewsPost } from '../types/news';

const DUMMY_POSTS: NewsPost[] = [
  {
    id: 'b2010-bethesda',
    title: 'B2010 UST Elite Shine at Bethesda Premier Cup: A Journey of Resilience and Teamwork',
    slug: 'b2010-bethesda-premier-cup',
    excerpt: 'Our B2010 UST Elite team delivered an incredible performance at the prestigious Bethesda Premier Cup, showcasing skill, resilience, and unwavering teamwork.',
    content: `This past weekend, our B2010 UST Elite team delivered an incredible performance at the prestigious Bethesda Premier Cup. Competing against some of the top teams in the region, the boys showcased their skill, resilience, and unwavering teamwork, ultimately finishing as Finalists in this highly competitive tournament.

The road to the finals was anything but easy. Each match brought new challenges, pushing our players to their limits. Yet, their determination and effort on the field were truly inspiring. From hard-fought victories to significant moments of growth, the team left everything on the pitch, embodying the spirit of UST Soccer Academy. We are incredibly proud of their progress, heart, and the way they represented our academy.

We also want to extend our heartfelt thanks to the coaches, parents, and supporters who made this journey possible. Your dedication and support have been instrumental in helping these young athletes reach new heights.

This achievement is just another step toward greatness for our B2010 UST Elite team. The best is yet to come, and we believe in the bright future ahead for these talented players. Keep grinding, keep believing, and continue striving for excellence. The journey has only just begun! 💚⚽🖤`,
    date: '2024-11-23',
    featuredImage: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6751fdf7895679318d20c5de.jpeg',
    author: 'UST Academy Staff',
    category: 'Tournament Success',
    tags: ['tournament', 'youth-development', 'success']
  },
  {
    id: 'training-tips',
    title: '5 Essential Training Tips to Help Young Athletes Improve Their Soccer Skills',
    slug: 'training-tips-young-athletes',
    excerpt: 'Essential training tips incorporated in our training to help our young players elevate their game.',
    content: `At UST, we believe that Soccer is a game that requires dedication, practice, and the right approach to skill development. For young athletes, establishing a strong foundation early on can make all the difference. Here are five essential training tips incorporated in our training to help our young players elevate their game:

1- Focus on Ball Control
Mastering the fundamentals of ball control is crucial for young players. Spending time on drills that emphasize dribbling, trapping, and shielding the ball will help them build confidence on the field. Encourage regular practice using both feet to improve versatility.

2- Develop a Strong First Touch
A player's first touch is what sets them apart on the field. Young athletes should focus on exercises that teach them to receive and control the ball under pressure. Practicing different scenarios where the ball comes from various directions helps improve anticipation and composure.

3- Work on Passing Accuracy
Passing is a key component of soccer, and accuracy can make a huge difference in how well a team plays together. Young players should practice both short and long passes, focusing on timing, accuracy, and proper foot technique. Encourage passing drills with teammates to foster teamwork and quick decision-making.

4- Improve Agility and Speed
Agility and speed are essential for young athletes to be effective in various positions. Incorporate exercises such as cone drills, ladder drills, and short sprints to enhance quick changes in direction and acceleration. These activities not only improve performance but also help in building coordination and endurance.

5- Play Small-Sided Games
Small-sided games (e.g., 3v3 or 4v4) are excellent for improving game awareness, decision-making, and teamwork. These games give young players more touches on the ball and the chance to develop an understanding of spacing, positioning, and game flow in a fun and competitive setting.

UST Staff believe that by incorporating these essential training tips, young soccer athletes can build a solid foundation of skills that will support their growth as well-rounded players. Consistent practice, dedication, and having fun with the game are key to developing into a successful soccer player.`,
    date: '2024-12-04',
    featuredImage: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
    author: 'UST Academy Staff',
    category: 'Training',
    tags: ['training', 'tips', 'youth']
  },
  {
    id: 'youth-development',
    title: 'Youth Development Program Success Stories',
    slug: 'youth-development-success-stories',
    excerpt: 'Discover how our youth development program is shaping the future of soccer talent.',
    content: 'Coming soon...',
    date: '2024-12-10',
    featuredImage: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
    author: 'UST Academy Staff',
    category: 'Youth Development',
    tags: ['youth', 'development', 'success']
  }
];

export async function getPosts(): Promise<NewsPost[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return DUMMY_POSTS;
}

export async function getPost(slug: string): Promise<NewsPost | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return DUMMY_POSTS.find(post => post.slug === slug) || null;
}