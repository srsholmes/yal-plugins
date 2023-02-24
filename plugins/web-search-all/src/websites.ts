export const SITES_ARRAY = [
  {
    name: 'GitHub',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?utf8=✓&q={query}&type=',
    },
  },
  {
    name: 'GitHub (location)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?q=location%3A{query}',
    },
  },
  {
    name: 'Google Dataset Search',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://toolbox.google.com/datasetsearch/search?query={query}',
    },
  },
  {
    name: 'Pinboard',
    metadata: {
      enabled: false,
      url: 'https://pinboard.in/search/?query={query}&all=Search+All',
    },
  },
  {
    name: 'StackSnippet',
    metadata: {
      enabled: false,
      url: 'http://www.stacksnippet.com/#gsc.tab=0&gsc.q={query}',
    },
  },
  {
    name: 'Arxiv Sanity Preserver',
    metadata: {
      enabled: false,
      url: 'http://www.arxiv-sanity.com/search?q={query}',
    },
  },
  {
    name: 'Pacmax',
    metadata: {
      enabled: false,
      url: 'https://pacmax.org/?_sf_s={query}',
    },
  },
  {
    name: 'Related Subreddits',
    metadata: {
      enabled: false,
      url: 'https://anvaka.github.io/sayit/?query={query}',
    },
  },
  {
    name: 'Audible',
    metadata: {
      enabled: false,
      url: 'https://www.audible.com/search?keywords={query}',
    },
  },
  {
    name: 'Reddit posted by domain (year)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/domain/{query}/top/?sort=top&t=year',
    },
  },

  {
    name: 'Steam games',
    icon: 'steam',
    metadata: {
      enabled: true,
      url: 'https://store.steampowered.com/search/?term={query}',
    },
  },
  {
    name: 'Google Domains',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://domains.google.com/m/registrar/search?hl=en&searchTerm={query}',
    },
  },
  {
    name: 'DuckDuckGo (Im feeling lucky)',
    icon: 'duckduckgo',
    metadata: {
      enabled: false,
      url: 'https://duckduckgo.com/?q=!{query}',
    },
  },
  {
    name: 'DeedMob (NL)',
    metadata: {
      enabled: false,
      url: 'https://www.deedmob.com/discover/Netherlands?query={query}',
    },
  },
  {
    name: 'NixOS packages',
    metadata: {
      enabled: false,
      url: 'https://nixos.org/nixos/packages.html#{query}',
    },
  },
  {
    name: 'Homebrew packages',
    metadata: {
      enabled: false,
      url: 'http://brewformulas.org/search?utf8=✓&search%5Bterms%5D={query}&button=&search%5Bnames%5D=0&search%5Bnames%5D=1&search%5Bfilenames%5D=0&search%5Bfilenames%5D=1&search%5Bdescriptions%5D=0&search%5Bdescriptions%5D=1',
    },
  },
  {
    name: 'Google Images (icons)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.co.in/search?tbs=ic%3Atrans&tbm=isch&q={query}+icon',
    },
  },
  {
    name: 'SciBay',
    metadata: {
      enabled: false,
      url: 'https://sci-bay.org/scholar?hl=en&as_sdt=0%2C5&q={query}&btnG=',
    },
  },
  {
    name: 'Reddit: Patient gamers',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/patientgamers/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: TypeScript',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/typescript/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Travel',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/travel/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Research chemicals',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/researchchemicals/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Replications',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/replications/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Ask drugs',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/askdrugs/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: YNAB',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/ynab/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Mechanical Keyboards',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/MechanicalKeyboards/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Gists (JavaScript)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://gist.github.com/search?l=JavaScript&q={query}&utf8=✓',
    },
  },
  {
    name: 'Gists (Go)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://gist.github.com/search?l=Go&q={query}&ref=searchresults&utf8=✓',
    },
  },
  {
    name: 'Gists (C#)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://gist.github.com/search?l=C%23&q=query&ref=searchresults&utf8=✓',
    },
  },
  {
    name: 'CodeSandbox',
    metadata: {
      enabled: false,
      url: 'https://codesandbox.io/search?query={query}',
    },
  },
  {
    name: 'Mashape',
    metadata: {
      enabled: false,
      url: 'https://market.mashape.com/explore?query={query}',
    },
  },
  {
    name: 'd: Rust docs',
    metadata: {
      enabled: false,
      url: 'https://docs.rs/releases/search?query={query}',
    },
  },
  {
    name: 'Reddit: ELI 5',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/explainlikeimfive/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Amazon (UK)',
    icon: 'amazon',
    metadata: {
      enabled: false,
      url: 'https://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords={query}',
    },
  },
  {
    name: 'Startup tracker',
    metadata: {
      enabled: false,
      url: 'https://startuptracker.io/startups/search?query={query}',
    },
  },
  {
    name: 'Art Station',
    metadata: {
      enabled: false,
      url: 'https://www.artstation.com/search?q={query}&sorting=recent',
    },
  },
  {
    name: 'IFTTT',
    metadata: {
      enabled: false,
      url: 'https://ifttt.com/search/query/{query}',
    },
  },
  {
    name: 'f: Rust internals',
    icon: 'rust',
    metadata: {
      enabled: false,
      url: 'https://internals.rust-lang.org/search?q={query}',
    },
  },
  {
    name: 'Reddit: Trackers',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/trackers/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Baidu',
    metadata: {
      enabled: false,
      url: 'http://www.baidu.com/s?ie=UTF-8&wd={query}',
    },
  },
  {
    name: 'Discuss it',
    metadata: {
      enabled: false,
      url: 'http://www.discussitapp.com/submit?url={query}',
    },
  },
  {
    name: 'Sourcegraph',
    metadata: {
      enabled: false,
      url: 'https://sourcegraph.com/search?q={query}',
    },
  },
  {
    name: 'Reddit: Movies',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/movies/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'f: ImageMagic',
    metadata: {
      enabled: false,
      url: 'https://www.imagemagick.org/discourse-server/search.php?keywords={query}&sid=8f601b1aa3c12a11bb44cf41b0bf1a1e',
    },
  },
  {
    name: 'Facebook (messages)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/messages/?qa={query}',
    },
  },
  {
    name: 'Facebook (people)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/people/?q={query}',
    },
  },
  {
    name: 'Facebook (photos)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/photos/?q={query}',
    },
  },
  {
    name: 'Facebook (videos)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/videos/?q={query}',
    },
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    metadata: {
      enabled: false,
      url: 'https://www.linkedin.com/search/results/index/?keywords={query}',
    },
  },
  {
    name: 'LinkedIn (jobs)',
    icon: 'linkedin',
    metadata: {
      enabled: false,
      url: 'https://www.linkedin.com/jobs/search/?keywords={query}',
    },
  },
  {
    name: 'LinkedIn (people)',
    icon: 'linkedin',
    metadata: {
      enabled: false,
      url: 'https://www.linkedin.com/search/results/people/?keywords={query}',
    },
  },
  {
    name: 'LinkedIn (companies)',
    icon: 'linkedin',
    metadata: {
      enabled: false,
      url: 'https://www.linkedin.com/search/results/people/?keywords={query}',
    },
  },
  {
    name: 'Facebook (pages)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/pages/?q={query}',
    },
  },
  {
    name: 'Facebook (places)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/str/{query}/keywords_places/',
    },
  },
  {
    name: 'Facebook (groups)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/groups/?q={query}',
    },
  },
  {
    name: 'Facebook (events)',
    icon: 'facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/events/?q={query}',
    },
  },
  {
    name: 'f: Script debugger',
    metadata: {
      enabled: false,
      url: 'http://forum.latenightsw.com/search?q={query}',
    },
  },
  {
    name: 'f: Binary age',
    metadata: {
      enabled: false,
      url: 'https://discuss.binaryage.com/search?q={query}',
    },
  },
  {
    name: 'Facebook',
    metadata: {
      enabled: false,
      url: 'https://www.facebook.com/search/top/?q={query}',
    },
  },
  {
    name: 'f: Hugo',
    metadata: {
      enabled: false,
      url: 'https://discourse.gohugo.io/search?q={query}',
    },
  },
  {
    name: 'f: Golang bridge',
    metadata: {
      enabled: false,
      url: 'https://forum.golangbridge.org/search?q={query}',
    },
  },
  {
    name: 'f: The Things Network',
    metadata: {
      enabled: false,
      url: 'https://www.thethingsnetwork.org/forum/search?q={query}',
    },
  },
  {
    name: 'f: Discourse',
    metadata: {
      enabled: false,
      url: 'https://try.discourse.org/search?q={query}',
    },
  },
  {
    name: 'GitHub (topics)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/topics/{query}',
    },
  },
  {
    name: 'Reddit: DMT',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/DMT/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'NPM',
    icon: 'npm',
    metadata: {
      enabled: false,
      url: 'https://www.npmjs.com/search?q={query}&page=1&ranking=optimal',
    },
  },
  {
    name: 'Name the color',
    metadata: {
      enabled: false,
      url: 'http://chir.ag/projects/name-that-color/{query}',
    },
  },
  {
    name: 'Reddit: Emacs',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/emacs/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Yoshua Wuyts wiki',
    metadata: {
      enabled: false,
      url: 'https://yoshuawuyts.gitbooks.io/knowledge/content/?q={query}',
    },
  },
  {
    name: 'Last.fm',
    icon: 'lastfm',
    metadata: {
      enabled: false,
      url: 'https://www.last.fm/search?q={query}',
    },
  },
  {
    name: 'LeetCode',
    metadata: {
      enabled: false,
      url: 'https://leetcode.com/problemset/all/?search={query}',
    },
  },
  {
    name: 'Reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&sort=relevance&t=all',
    },
  },
  {
    name: 'GitHub (recent)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?utf8=✓&q={query}&type=Repositories&ref=searchresults&o=desc&s=updated',
    },
  },
  {
    name: 'Reddit: Advanced Fitness',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AdvancedFitness/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Algorithms',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/algorithms/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Apple',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/apple/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Artificial',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/artificial/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Ask computer science',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AskComputerScience/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Ask Netsec',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AskNetsec/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Ask Programming',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AskProgramming/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: AskHistorians',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AskHistorians/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Askreddit',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/AskReddit/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: AskScience',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/askscience/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: C',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/C_Programming/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: C#',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/csharp/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: C++',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/cpp/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Clojure',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Clojure/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Coding',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/coding/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Coffecript',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/coffeescript/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: CS books',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/csbooks/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: CS career questions',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/cscareerquestions/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: CS education',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/CSEducation/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Daily programmer',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/dailyprogrammer/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Data is beautiful',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/dataisbeautiful/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Design',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Design/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Everything science',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/EverythingScience/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Fitness',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Fitness/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Future beats',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/futurebeats/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Futurology',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Futurology/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Gamedev',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/gamedev/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Gentleman boners',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/gentlemanboners/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Get disciplined',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/getdisciplined/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Golang',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/golang/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Haskell',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/haskell/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Health',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Health/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Indie heads',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/indieheads/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Internet is beautiful',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/InternetIsBeautiful/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: iPhone',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/iphone/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Java',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/java/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: JavaScript',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/javascript/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Lady boners',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/LadyBoners/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: LaTeX',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/LaTeX/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Learn programming',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/learnprogramming/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Lectures',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/lectures/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Linux',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/linux/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Lisp',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/lisp/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Listen to this',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/listentothis/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: LSD',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/LSD/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Lua',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/lua/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Mac',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/mac/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Math',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/math/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Matlab',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/matlab/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Meditation',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Meditation/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Minimalism',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/minimalism/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Netsec',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/netsec/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: No stupid questions',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/NoStupidQuestions/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Nootropics',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Nootropics/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Nutrition',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/nutrition/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Objective c',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/ObjectiveC/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Out of the loop',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/OutOfTheLoop/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Perl',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/perl/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: PHP',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/PHP/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Physics',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Physics/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Pics',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/pics/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Privacy',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/privacy/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Programming',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/programming/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Psychonaut',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Psychonaut/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Python',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Python/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: R stats',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/rstats/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Rational psychonaut',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/RationalPsychonaut/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Reverse engineering',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/ReverseEngineering/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Ruby',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/ruby/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Rust',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/rust/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Scala',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/scala/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Science',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/science/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Seduction',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/seduction/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Shower thoughts',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/Showerthoughts/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: SQL',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/SQL/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Startups',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/startups/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Swift',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/swift/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Technology',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/swift/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Tiny code',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/tinycode/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: True film',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/TrueFilm/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Types',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/types/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Vim',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/vim/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Webdev',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/webdev/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Reddit: Web design',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/web_design/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'd: Android docs',
    icon: 'android',
    metadata: {
      enabled: false,
      url: 'https://developer.android.com/training/basics/fragments/index.html#q={query}',
    },
  },
  {
    name: 'd: C++',
    metadata: {
      enabled: false,
      url: 'http://en.cppreference.com/mwiki/index.php?title=Special%3ASearch&search={query}&button=',
    },
  },
  {
    name: 'd: Developer apple',
    icon: 'apple',
    metadata: {
      enabled: false,
      url: 'https://developer.apple.com/search/?q={query}&platform=iOS',
    },
  },
  {
    name: 'd: iOS Apple',
    icon: 'apple',
    metadata: {
      enabled: false,
      url: 'https://developer.apple.com/search/?q={query}&platform=iOS',
    },
  },
  {
    name: 'd: Java lib',
    metadata: {
      enabled: false,
      url: 'https://java.libhunt.com/search?query={query}',
    },
  },
  {
    name: 'd: MDN Docs',
    metadata: {
      enabled: false,
      url: 'https://developer.mozilla.org/en-US/search?q={query}&topic=html&topic=css&topic=js&topic=api',
    },
  },
  {
    name: 'd: Hoogle',
    metadata: {
      enabled: false,
      url: 'https://www.haskell.org/hoogle/?hoogle={query}',
    },
  },
  {
    name: 'd: Haskell hayoo',
    metadata: {
      enabled: false,
      url: 'http://hayoo.fh-wedel.de/?query={query}',
    },
  },
  {
    name: 'd: Stackage',
    metadata: {
      enabled: false,
      url: 'https://www.stackage.org/lts-9.9/hoogle?q={query}',
    },
  },
  {
    name: 'd: Haskell stack',
    metadata: {
      enabled: false,
      url: 'https://www.stackage.org/lts-9.9/hoogle?q={query}',
    },
  },
  {
    name: 'f: Hazel forum',
    metadata: {
      enabled: false,
      url: 'https://www.noodlesoft.com/forums/search.php?keywords={query}',
    },
  },
  {
    name: 'f: Physics forums',
    metadata: {
      enabled: false,
      url: 'https://cse.google.com/cse?cx=partner-pub-6580726045122001:6282512200&ie=UTF-8&q={query}',
    },
  },
  {
    name: 'f: Shroomery',
    metadata: {
      enabled: false,
      url: 'https://www.shroomery.org/forums/dosearch.php?terms={query}',
    },
  },
  {
    name: 'Stack Exchange: Academia',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://academia.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Android enthusiasts',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://android.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Arqade',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://gaming.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Ask different',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://apple.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Ask ubuntu',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://askubuntu.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Biology',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://biology.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Bitcoin',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://bitcoin.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Buddhism',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://buddhism.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Chemistry',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://chemistry.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Cognitive sciences',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://cogsci.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Computational science',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://scicomp.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Computer science',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://cs.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Cross validated',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://stats.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Database administrators',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://dba.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Electrical engineering',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://electronics.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: English language',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://english.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Freelancing',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://freelancing.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Game development',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://gamedev.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Graphic design',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://graphicdesign.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Information security',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://security.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: History',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://history.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Home improvement',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://diy.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Math overflow',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://mathoverflow.net/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Mathematica',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://mathematica.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Mathematical educators',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://matheducators.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Mathematics',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://math.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Meta',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://meta.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Movies & tv',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://movies.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Network engineering stack',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://networkengineering.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Open data',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://opendata.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Personal finance',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://money.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Personal productivity',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://productivity.stackexchange.com/search?q={query}+',
    },
  },
  {
    name: 'Stack Exchange: Pets',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://pets.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Philosohy',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://philosophy.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Photography',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://photo.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Physics',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://physics.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Programmers',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://programmers.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Project management',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://pm.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Raspberry',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://raspberrypi.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Reverse engineering',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://reverseengineering.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Robotics',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://robotics.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Role playing games',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://rpg.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Salesforce',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://salesforce.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Scifi & fantasy',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://scifi.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Serverfault',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://serverfault.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Sharepoint',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://sharepoint.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Signal processing',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://dsp.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Skeptics',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://skeptics.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Software recommendations',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://softwarerecs.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Sound design',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://sound.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Space exploration',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://space.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Stack overflow',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'http://stackoverflow.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Stack python',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://stackoverflow.com/search?q=python+{query}',
    },
  },
  {
    name: 'Stack Exchange: Super user',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://superuser.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Theoretical compsi',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://cstheory.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Tor stack',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://tor.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Travel',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://travel.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Unix & linux',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://unix.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: User experience',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://ux.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Web apps',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://webapps.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Web masters',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://webmasters.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Workplace',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://workplace.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'Stack Exchange: Writers',
    icon: 'stackexchange',
    metadata: {
      enabled: false,
      url: 'http://writers.stackexchange.com/search?q={query}',
    },
  },
  {
    name: 'd: Search os status',
    metadata: {
      enabled: false,
      url: 'https://www.osstatus.com/search/results?platform=all&framework=all&search={query}',
    },
  },
  {
    name: 't: Translate to English',
    metadata: {
      enabled: false,
      url: 'https://translate.google.com/#auto/en/{query}',
    },
  },
  {
    name: 't: Translate to Dutch',
    metadata: {
      enabled: false,
      url: 'https://translate.google.com/#auto/nl/{query}',
    },
  },
  {
    name: 't: Translate to Russian',
    metadata: {
      enabled: false,
      url: 'https://translate.google.com/#auto/ru/{query}',
    },
  },
  {
    name: 't: Translate to Spanish',
    metadata: {
      enabled: false,
      url: 'https://translate.google.com/#auto/es/{query}',
    },
  },
  {
    name: '8tracks',
    metadata: {
      enabled: false,
      url: 'http://8tracks.com/explore/{query}',
    },
  },
  {
    name: 'Abbreviation terms',
    metadata: {
      enabled: false,
      url: 'http://www.abbreviations.com/abbreviation/{query}',
    },
  },
  {
    name: 'Yandex',
    metadata: {
      enabled: false,
      url: 'https://www.yandex.com/search/?msid=1484233484.98264.22892.24573&text={query}&lr=10466',
    },
  },
  {
    name: 'Yandex (images)',
    metadata: {
      enabled: false,
      url: 'https://yandex.com/images/search?text={query}',
    },
  },
  {
    name: 'Abbreviations',
    metadata: {
      enabled: false,
      url: 'http://www.abbreviations.com/{query}',
    },
  },
  {
    name: 'Aliexpress',
    metadata: {
      enabled: false,
      url: 'http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20160518044144&SearchText={query}',
    },
  },
  {
    name: 'AlternativeTo',
    metadata: {
      enabled: false,
      url: 'http://alternativeto.net/browse/search?q={query}',
    },
  },
  {
    name: 'Angellist',
    metadata: {
      enabled: false,
      url: 'https://angel.co/search?q={query}',
    },
  },
  {
    name: 'Appshopper',
    metadata: {
      enabled: false,
      url: 'http://appshopper.com/search?search={query}',
    },
  },
  {
    name: 'Better explained',
    metadata: {
      enabled: false,
      url: 'http://betterexplained.com/?s={query}',
    },
  },
  {
    name: 'Champion.gg',
    metadata: {
      enabled: false,
      url: 'http://champion.gg/champion/{query}',
    },
  },
  {
    name: 'Codeforces',
    metadata: {
      enabled: false,
      url: 'http://codeforces.com/search?by=&query=binary',
    },
  },
  {
    name: 'Coursera courses',
    metadata: {
      enabled: false,
      url: 'https://www.coursera.org/courses?search={query}',
    },
  },
  {
    name: 'CSS tricks',
    metadata: {
      enabled: false,
      url: 'https://css-tricks.com/search-results/?q={query}',
    },
  },
  {
    name: 'Documentary heaven',
    metadata: {
      enabled: false,
      url: 'http://documentaryheaven.com/find/?q={query}',
    },
  },
  {
    name: 'Duckduckgo (about)',
    icon: 'duckduckgo',
    metadata: {
      enabled: false,
      url: 'https://duckduckgo.com/?q={query}&ia=about',
    },
  },
  {
    name: 'Duckduckgo (definition)',
    icon: 'duckduckgo',
    metadata: {
      enabled: false,
      url: 'https://duckduckgo.com/?q={query}&ia=definition',
    },
  },
  {
    name: 'Duckduckgo (images)',
    icon: 'duckduckgo',
    metadata: {
      enabled: false,
      url: 'https://duckduckgo.com/?q={query}&iax=1&ia=images',
    },
  },
  {
    name: 'Duckduckgo (videos)',
    icon: 'duckduckgo',
    metadata: {
      enabled: false,
      url: 'https://duckduckgo.com/?q={query}&ia=videos',
    },
  },
  {
    name: 'edX',
    metadata: {
      enabled: false,
      url: 'https://www.edx.org/course?search_query={query}',
    },
  },
  {
    name: 'Evolvr',
    metadata: {
      enabled: false,
      url: 'https://www.evolvr.io/search?utf8=✓&query={query}+&commit=Enter',
    },
  },
  {
    name: 'Examine',
    metadata: {
      enabled: false,
      url: 'http://examine.com/search/?q={query}&homepage=1',
    },
  },
  {
    name: 'Extra torrent',
    metadata: {
      enabled: false,
      url: 'http://extratorrent.cc/search/?search={query}&new=1&x=0&y=0',
    },
  },
  {
    name: 'Go search',
    metadata: {
      enabled: false,
      url: 'http://go-search.org/search?q={query}',
    },
  },
  {
    name: 'Google search (past month)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/search?q={query}&tbs=qdr:m',
    },
  },
  {
    name: 'Google search (past week)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/search?q={query}&tbs=qdr:w',
    },
  },
  {
    name: 'Stack Overflow (jobs)',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'https://stackoverflow.com/jobs?sort=i&q={query}',
    },
  },
  {
    name: 'Instagram (tags)',
    metadata: {
      enabled: false,
      url: 'https://instagram.com/explore/tags/{query}/',
    },
  },
  {
    name: 'Twitter (user)',
    icon: 'twitter',
    metadata: {
      enabled: true,
      url: 'https://twitter.com/{query}',
    },
  },
  {
    name: 'Merriam webster dictionary',
    metadata: {
      enabled: false,
      url: 'http://www.merriam-webster.com/dictionary/{query}',
    },
  },
  {
    name: 'Golang',
    metadata: {
      enabled: false,
      url: 'https://golang.org/search?q={query}',
    },
  },
  {
    name: 'Google Drive',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://drive.google.com/drive/search?q={query}',
    },
  },
  {
    name: 'Google (24 hours)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/search?q={query}&tbs=qdr:d',
    },
  },
  {
    name: 'Google (PDFs)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/#q=filetype:pdf+{query}',
    },
  },
  {
    name: 'Google Groups',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'http://groups.google.com/groups?q={query}',
    },
  },
  {
    name: 'Google Scholar',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://scholar.google.com/scholar?hl=en&q={query}&btnG=&as_sdt=1%2C44&as_sdtp=',
    },
  },
  {
    name: 'Google',
    icon: 'google',
    metadata: {
      enabled: true,
      url: 'https://www.google.com/search?q={query}&tbs=li:1',
    },
  },
  {
    name: 'Grouevee',
    metadata: {
      enabled: false,
      url: 'https://www.grouvee.com/search/?q={query}',
    },
  },
  {
    name: 'Habrahabr',
    metadata: {
      enabled: false,
      url: 'http://habrahabr.ru/search/?q={query}',
    },
  },
  {
    name: 'Hacker News',
    icon: 'hackernews',
    metadata: {
      enabled: false,
      url: 'https://hn.algolia.com/?query={query}&sort=byPopularity&prefix&page=0&dateRange=all&type=story',
    },
  },
  {
    name: 'How stuff works',
    metadata: {
      enabled: false,
      url: 'http://www.howstuffworks.com/search.php?terms={query}',
    },
  },
  {
    name: 'Icon store',
    metadata: {
      enabled: false,
      url: 'http://iconstore.co/?s={query}',
    },
  },
  {
    name: 'Index of a company',
    metadata: {
      enabled: false,
      url: 'https://index.co/company/{query}',
    },
  },
  {
    name: 'Khan Academy',
    metadata: {
      enabled: false,
      url: 'https://www.khanacademy.org/search?referer=%2F&page_search_query={query}',
    },
  },
  {
    name: 'Kinopoisk',
    metadata: {
      enabled: false,
      url: 'http://www.kinopoisk.ru/search/?text={query}',
    },
  },
  {
    name: 'Libraries.io',
    metadata: {
      enabled: false,
      url: 'https://libraries.io/search?q={query}',
    },
  },
  {
    name: 'Lifehacker',
    metadata: {
      enabled: false,
      url: 'http://lifehacker.com/search?q={query}',
    },
  },
  {
    name: 'macOS hints',
    metadata: {
      enabled: false,
      url: 'http://www.macosxhints.com/search.php?query={query}&type=stories&mode=search&keyType=all',
    },
  },
  {
    name: 'Mac rumours',
    metadata: {
      enabled: false,
      url: 'http://forums.macrumors.com/search/2213886/?q={query}&o=date',
    },
  },
  {
    name: 'MacUpdate',
    metadata: {
      enabled: false,
      url: 'https://www.macupdate.com/find/mac/{query}',
    },
  },
  {
    name: 'Math world',
    metadata: {
      enabled: false,
      url: 'http://mathworld.wolfram.com/search/?query={query}&x=0&y=0',
    },
  },
  {
    name: 'Metacademy',
    metadata: {
      enabled: false,
      url: 'https://www.metacademy.org/search?q={query}',
    },
  },
  {
    name: 'd: Meteor packages',
    metadata: {
      enabled: false,
      url: 'https://atmospherejs.com/?q={query}',
    },
  },
  {
    name: 'MIT Open Courseware',
    metadata: {
      enabled: false,
      url: 'https://search.mit.edu/search?site=ocw&client=mit&getfields=*&output=xml_no_dtd&proxystylesheet=https%3A%2F%2Focw.mit.edu%2Fsearch%2Fgoogle-ocw.xsl&requiredfields=WT%252Ecg_s%3ACourse+Home%7CWT%252Ecg_s%3AResource+Home&sectionlimit=WT%252Ecg_s%3ACourse+Home%7CWT%252Ecg_s%3AResource+Home&as_dt=i&oe=utf-8&departmentName=web&filter=0&courseName=&q={query}&btnG.x=0&btnG.y=0',
    },
  },
  {
    name: 'NPMS',
    metadata: {
      enabled: false,
      url: 'https://npms.io/search?q={query}',
    },
  },
  {
    name: 'NutritionFacts',
    metadata: {
      enabled: false,
      url: 'https://nutritionfacts.org/?s={query}',
    },
  },
  {
    name: 'Opgg',
    metadata: {
      enabled: false,
      url: 'http://euw.op.gg/summoner/userName={query}',
    },
  },
  {
    name: 'Patrick JMT',
    metadata: {
      enabled: false,
      url: 'http://patrickjmt.com/?s={query}',
    },
  },
  {
    name: 'PirateBay',
    metadata: {
      enabled: false,
      url: 'https://pirateproxy.la/search/{query}/0/99/0',
    },
  },
  {
    name: 'Pixabay',
    metadata: {
      enabled: false,
      url: 'https://pixabay.com/en/photos/?q={query}&image_type=&cat=&min_width=&min_height=',
    },
  },
  {
    name: 'Pocket',
    metadata: {
      enabled: false,
      url: 'https://www.getpocket.com/explore/{query}',
    },
  },
  {
    name: 'Proof wiki',
    metadata: {
      enabled: false,
      url: 'https://proofwiki.org/w/index.php?title=Special%3ASearch&search={query}',
    },
  },
  {
    name: 'Proofwiki',
    metadata: {
      enabled: false,
      url: 'https://proofwiki.org/w/index.php?search={query}&title=Special%3ASearch&go=Go',
    },
  },
  {
    name: 'Psychonaut Wiki',
    metadata: {
      enabled: false,
      url: 'https://psychonautwiki.org/wiki/{query}',
    },
  },
  {
    name: 'Quizlet',
    metadata: {
      enabled: false,
      url: 'https://quizlet.com/subject/{query}/',
    },
  },
  {
    name: 'Reddit (past month)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&t=month',
    },
  },
  {
    name: 'Reddit (past week)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&t=week',
    },
  },
  {
    name: 'Reddit (past year)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&t=year',
    },
  },
  {
    name: 'Reddit (past day)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&t=day',
    },
  },
  {
    name: 'Reddit (past hour)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&t=hour',
    },
  },
  {
    name: 'Ruby gems',
    metadata: {
      enabled: false,
      url: 'https://rubygems.org/search?utf8=%E2%9C%93&query={query}',
    },
  },
  {
    name: 'Rutracker',
    metadata: {
      enabled: false,
      url: 'http://rutracker.org/forum/tracker.php?nm={query}',
    },
  },
  {
    name: 'Simple wikipedia',
    metadata: {
      enabled: false,
      url: 'https://simple.wikipedia.org/w/index.php?search={query}&title=Special%3ASearch&go=Go',
    },
  },
  {
    name: 'Slashdot',
    metadata: {
      enabled: false,
      url: 'http://slashdot.org/?fhfilter={query}',
    },
  },
  {
    name: 'Stackshare',
    metadata: {
      enabled: false,
      url: 'http://stackshare.io/search/q={query}',
    },
  },
  {
    name: 'Stanford searchworks',
    metadata: {
      enabled: false,
      url: 'http://searchworks.stanford.edu/?q={query}&search_field=search',
    },
  },
  {
    name: 'Student room',
    metadata: {
      enabled: false,
      url: 'http://www.thestudentroom.co.uk/search.php?query={query}',
    },
  },
  {
    name: 'Stylish',
    metadata: {
      enabled: false,
      url: 'https://userstyles.org/styles/browse?search_terms={query}',
    },
  },
  {
    name: 'Symlab',
    metadata: {
      enabled: false,
      url: 'https://www.symbolab.com/solver/step-by-step/{query}',
    },
  },
  {
    name: 'SyntaxDB',
    metadata: {
      enabled: false,
      url: 'https://syntaxdb.com/reference/search?utf8=✓&search={query}',
    },
  },
  {
    name: 'TED Talks',
    metadata: {
      enabled: false,
      url: 'http://www.ted.com/search?q={query}',
    },
  },
  {
    name: 'Terminal commands',
    metadata: {
      enabled: false,
      url: 'http://www.openbsd.org/cgi-bin/man.cgi?query={query}',
    },
  },
  {
    name: 'Thesaurus',
    metadata: {
      enabled: false,
      url: 'http://www.thesaurus.com/browse/{query}?s=t',
    },
  },
  {
    name: 'Trakt',
    metadata: {
      enabled: false,
      url: 'https://trakt.tv/search?utf8=✓&query={query}',
    },
  },
  {
    name: 'Tumblr',
    metadata: {
      enabled: false,
      url: 'https://www.tumblr.com/search/{query}',
    },
  },
  {
    name: 'Twitter live feed',
    icon: 'twitter',
    metadata: {
      enabled: false,
      url: 'https://twitter.com/search?f=tweets&vertical=default&q={query}&src=typd',
    },
  },
  {
    name: 'Twitter (videos)',
    icon: 'twitter',
    metadata: {
      enabled: false,
      url: 'https://twitter.com/search?f=videos&vertical=default&q={query}&src=typd',
    },
  },
  {
    name: 'Udemy',
    metadata: {
      enabled: false,
      url: 'https://www.udemy.com/courses/search/?q={query}',
    },
  },
  {
    name: 'UI talks',
    metadata: {
      enabled: false,
      url: 'http://talks.ui-patterns.com/search?utf8=✓&q={query}',
    },
  },
  {
    name: 'Ultimate guitar',
    metadata: {
      enabled: false,
      url: 'http://www.ultimate-guitar.com/search.php?search_type=title&value={query}',
    },
  },
  {
    name: 'Unsplash',
    metadata: {
      enabled: false,
      url: 'https://unsplash.com/search/photos/{query}',
    },
  },
  {
    name: 'Urban dictionary',
    metadata: {
      enabled: false,
      url: 'http://www.urbandictionary.com/define.php?term={query}',
    },
  },
  {
    name: 'Vim awesome',
    metadata: {
      enabled: false,
      url: 'http://vimawesome.com/?q={query}',
    },
  },
  {
    name: 'Vim wiki',
    metadata: {
      enabled: false,
      url: 'http://vim.wikia.com/wiki/Special:Search?search={query}&fulltext=Search',
    },
  },
  {
    name: 'VK',
    metadata: {
      enabled: false,
      url: 'https://vk.com/search?c[q]={query}&c[section]=auto',
    },
  },
  {
    name: 'VK (music)',
    metadata: {
      enabled: false,
      url: 'http://vk.com/audios196314313?q={query}',
    },
  },
  {
    name: 'VK (people)',
    metadata: {
      enabled: false,
      url: 'https://vk.com/search?c%5Bname%5D=1&c%5Bq%5D={query}&c%5Bsection%5D=people',
    },
  },
  {
    name: 'Whois',
    metadata: {
      enabled: false,
      url: 'http://whois.domaintools.com/{query}',
    },
  },
  {
    name: 'WikiHow',
    metadata: {
      enabled: false,
      url: 'http://www.wikihow.com/Special:LSearch?search={query}',
    },
  },
  {
    name: 'Wolfram Alpha derive',
    metadata: {
      enabled: false,
      url: 'http://www.wolframalpha.com/input/?i=derive+{query}',
    },
  },
  {
    name: 'Wolfram alpha integrate',
    metadata: {
      enabled: false,
      url: 'http://www.wolframalpha.com/input/?i=integrate+{query}',
    },
  },
  {
    name: 'Wolfram alpha solve',
    metadata: {
      enabled: false,
      url: 'http://www.wolframalpha.com/input/?i=solve+{query}',
    },
  },
  {
    name: 'Goodreads',
    metadata: {
      enabled: false,
      url: 'https://www.goodreads.com/search?q={query}',
    },
  },
  {
    name: 'Reddit: Machine learning',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/MachineLearning/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'SoundCloud',
    metadata: {
      enabled: false,
      url: 'https://soundcloud.com/search?q={query}',
    },
  },
  {
    name: 'd: Gitlogs - last month',
    metadata: {
      enabled: false,
      url: 'http://www.gitlogs.com/most_popular?from=last-month&topic={query}',
    },
  },
  {
    name: 'Bubblehunt',
    metadata: {
      enabled: false,
      url: 'https://bubblehunt.com/?q={query}',
    },
  },
  {
    name: 'Pinboard (tags)',
    metadata: {
      enabled: false,
      url: 'https://pinboard.in/t:{query}/',
    },
  },
  {
    name: 'Find lectures',
    metadata: {
      enabled: false,
      url: 'https://www.findlectures.com/?q={query}&p=1&',
    },
  },
  {
    name: 'Kaggle',
    metadata: {
      enabled: false,
      url: 'https://www.kaggle.com/discussion?sortBy=relevance&group=all&search={query}&page=1&category=all&kind=topics',
    },
  },
  {
    name: 'Lobsters',
    metadata: {
      enabled: false,
      url: 'https://lobste.rs/search?utf8=✓&q={query}&what=all&order=relevance',
    },
  },
  {
    name: 'Aminer',
    metadata: {
      enabled: false,
      url: 'http://aminer.org/search?t=b&q={query}',
    },
  },
  {
    name: 'd: Gitlogs',
    metadata: {
      enabled: false,
      url: 'http://www.gitlogs.com/most_popular?topic={query}',
    },
  },
  {
    name: 'd: Gitlogs - last week',
    metadata: {
      enabled: false,
      url: 'http://www.gitlogs.com/most_popular?from=last-week&topic={query}',
    },
  },
  {
    name: 'd: Pypi python',
    metadata: {
      enabled: false,
      url: 'http://www.gitlogs.com/most_popular?from=last-week&topic={query}',
    },
  },
  {
    name: 'f: Alfred Forum',
    metadata: {
      enabled: false,
      url: 'http://www.alfredforum.com/search/?&q={query}',
    },
  },
  {
    name: 'f: Alfred Forum (newest)',
    metadata: {
      enabled: false,
      url: 'https://www.alfredforum.com/search/?q={query}&sortby=newest',
    },
  },
  {
    name: 'f: Alfred forum (members)',
    metadata: {
      enabled: false,
      url: 'https://www.alfredforum.com/search/?&q={query}&type=core_members&joinedDate=any&group[4]=1&group[13]=1&group[14]=1&group[6]=1&group[7]=1&group[12]=1&group[3]=1&group[10]=1&group[11]=1',
    },
  },
  {
    name: 'f: Keyboard Maestro',
    metadata: {
      enabled: false,
      url: 'https://forum.keyboardmaestro.com/search?q={query}',
    },
  },
  {
    name: 'f: Keyboard Maestro (latest posts)',
    metadata: {
      enabled: false,
      url: 'https://forum.keyboardmaestro.com/search?q={query}%20order%3Alatest',
    },
  },
  {
    name: 'f: Keyboard Maestro (most liked)',
    metadata: {
      enabled: false,
      url: 'https://forum.keyboardmaestro.com/search?q={query}%20order%3Alikes',
    },
  },
  {
    name: 'f: Keyboard Maestro (most viewed)',
    metadata: {
      enabled: false,
      url: 'https://forum.keyboardmaestro.com/search?q={query}%20order%3Aviews',
    },
  },
  {
    name: 'Quora',
    metadata: {
      enabled: false,
      url: 'https://www.quora.com/search?q={query}',
    },
  },
  {
    name: 'Quora (profiles)',
    metadata: {
      enabled: false,
      url: 'https://www.quora.com/search?q={query}&type=profile',
    },
  },
  {
    name: 'Quora (topics)',
    metadata: {
      enabled: false,
      url: 'https://www.quora.com/search?q={query}&type=topic',
    },
  },
  {
    name: 'Quora (answers)',
    metadata: {
      enabled: false,
      url: 'https://www.quora.com/search?q={query}&type=answer',
    },
  },
  {
    name: 'Quora (past month)',
    metadata: {
      enabled: false,
      url: 'https://www.quora.com/search?q={query}&time=month',
    },
  },
  {
    name: 'Letterboxd',
    metadata: {
      enabled: false,
      url: 'http://letterboxd.com/search/{query}/',
    },
  },
  {
    name: 'Letterboxd (tags)',
    metadata: {
      enabled: false,
      url: 'http://letterboxd.com/search/tags/{query}/',
    },
  },
  {
    name: 'Letterboxd (actors)',
    metadata: {
      enabled: false,
      url: 'http://letterboxd.com/search/actors/{query}/',
    },
  },
  {
    name: 'Stack Overflow (newest)',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'http://stackoverflow.com/search?tab=newest&q={query}',
    },
  },
  {
    name: 'Stack Overflow (most votes)',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'http://stackoverflow.com/search?tab=votes&q={query}',
    },
  },
  {
    name: 'Stack Overflow (most ative)',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'http://stackoverflow.com/search?tab=active&q={query}',
    },
  },
  {
    name: 'Medium',
    icon: 'medium',
    metadata: {
      enabled: false,
      url: 'https://medium.com/search?q={query}',
    },
  },
  {
    name: 'Medium (users)',
    icon: 'medium',
    metadata: {
      enabled: false,
      url: 'https://medium.com/search/users?q={query}',
    },
  },
  {
    name: 'Medium (tags)',
    icon: 'medium',
    metadata: {
      enabled: false,
      url: 'https://medium.com/search/tags?q={query}',
    },
  },
  {
    name: 'Medium (publications)',
    icon: 'medium',
    metadata: {
      enabled: false,
      url: 'https://medium.com/search/publications?q={query}',
    },
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    metadata: {
      enabled: true,
      url: 'https://twitter.com/search?q={query}&src=typd',
    },
  },
  {
    name: 'Twitter (users)',
    icon: 'twitter',
    metadata: {
      enabled: true,
      url: 'https://twitter.com/search?f=users&vertical=default&q={query}&src=typd',
    },
  },
  {
    name: 'Twitter (latest)',
    icon: 'twitter',
    metadata: {
      enabled: false,
      url: 'https://twitter.com/search?f=tweets&vertical=news&q={query}&src=typd',
    },
  },
  {
    name: 'Twitter (photos)',
    icon: 'twitter',
    metadata: {
      enabled: false,
      url: 'https://twitter.com/search?f=images&vertical=default&q={query}&src=typd',
    },
  },
  {
    name: 'Twitter (people you follow)',
    icon: 'twitter',
    metadata: {
      enabled: false,
      url: 'https://twitter.com/search?s=follows&vertical=news&q={query}&src=typd',
    },
  },
  {
    name: 'Product Hunt',
    icon: 'producthunt',
    metadata: {
      enabled: false,
      url: 'https://www.producthunt.com/search/posts?q={query}',
    },
  },
  {
    name: 'Product Hunt (collections)',
    metadata: {
      enabled: false,
      url: 'https://www.producthunt.com/search/collections?q={query}',
    },
  },
  {
    name: 'Product Hunt (users)',
    metadata: {
      enabled: false,
      url: 'https://www.producthunt.com/search/users?q={query}',
    },
  },
  {
    name: 'Product Hunt (topics)',
    metadata: {
      enabled: false,
      url: 'https://www.producthunt.com/search/topics?q={query}',
    },
  },
  {
    name: 'Gists',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://gist.GitHub.com/search?utf8=%E2%9C%93&q={query}',
    },
  },
  {
    name: 'GitHub (issues)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?q={query}&ref=searchresults&type=Issues&utf8=%E2%9C%93',
    },
  },
  {
    name: 'GitHub (commits)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?utf8=%E2%9C%93&q={query}&type=Commits&ref=searchresults',
    },
  },
  {
    name: 'GitHub (wikis)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?utf8=%E2%9C%93&q={query}&type=Wikis&ref=searchresults',
    },
  },
  {
    name: 'Dribble',
    icon: 'dribbble',
    metadata: {
      enabled: false,
      url: 'https://dribbble.com/search?q={query}',
    },
  },
  {
    name: 'Dribble (latest)',
    icon: 'dribbble',
    metadata: {
      enabled: false,
      url: 'https://dribbble.com/search?q={query}&s=latest',
    },
  },
  {
    name: 'Goodreads (lists)',
    metadata: {
      enabled: false,
      url: 'https://www.goodreads.com/search?q={query}&search%5Bfield%5D=author&search%5Bsource%5D=goodreads&search_type=lists&tab=lists',
    },
  },
  {
    name: 'Goodreads (quotes)',
    metadata: {
      enabled: false,
      url: 'https://www.goodreads.com/search?utf8=✓&query={query}',
    },
  },
  {
    name: 'Goodreads (people)',
    metadata: {
      enabled: false,
      url: 'https://www.goodreads.com/search?q={query}&search%5Bsource%5D=goodreads&search_type=people&tab=people',
    },
  },
  {
    name: 'Goodreads (groups)',
    metadata: {
      enabled: false,
      url: 'https://www.goodreads.com/search?utf8=%E2%9C%93&q={query}&search_type=groups&search%5Bfield%5D=on',
    },
  },
  {
    name: 'Hacker News (past month)',
    icon: 'hackernews',
    metadata: {
      enabled: false,
      url: 'https://hn.algolia.com/?query={query}&sort=byPopularity&prefix&page=0&dateRange=pastMonth&type=all',
    },
  },
  {
    name: 'Hacker News (past year)',
    icon: 'hackernews',
    metadata: {
      enabled: false,
      url: 'https://hn.algolia.com/?query={query}&sort=byPopularity&prefix&page=0&dateRange=pastYear&type=all',
    },
  },
  {
    name: 'Hacker News (stories all time)',
    icon: 'hackernews',
    metadata: {
      enabled: false,
      url: 'https://hn.algolia.com/?query={query}&sort=byPopularity&prefix&page=0&dateRange=all&type=story',
    },
  },
  {
    name: 'Hacker News (comments past month)',
    icon: 'hackernews',
    metadata: {
      enabled: false,
      url: 'https://hn.algolia.com/?query={query}&sort=byPopularity&prefix&page=0&dateRange=pastMonth&type=comment',
    },
  },
  {
    name: 'GitHub (code)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?q={query}&ref=searchresults&type=Code&utf8=%E2%9C%93',
    },
  },
  {
    name: 'GitHub (code) (go)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?o=desc&q=language%3Ago+%22{query}%22&s=indexed&type=Code&utf8=%E2%9C%93',
    },
  },
  {
    name: 'GitHub (users)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?o=desc&q={query}&ref=searchresults&s=followers&type=Users&utf8=%E2%9C%93',
    },
  },
  {
    name: 'GitHub (most forks)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?o=desc&q={query}&ref=searchresults&s=forks&type=Repositories&utf8=✓',
    },
  },
  {
    name: 'GitHub (most starred)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?utf8=%E2%9C%93&q={query}&type=Repositories&ref=searchresults&o=desc&s=stars',
    },
  },
  {
    name: 'Reddit (top this month)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&sort=top&t=month',
    },
  },
  {
    name: 'Reddit (new)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&sort=new&t=all',
    },
  },
  {
    name: 'Reddit (past year)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&sort=relevance&t=year',
    },
  },
  {
    name: 'Reddit (top all)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/search?q={query}&sort=top&t=all',
    },
  },
  {
    name: 'Wolfram Alpha',
    metadata: {
      enabled: false,
      url: 'http://www.wolframalpha.com/input/?i={query}',
    },
  },
  {
    name: 'Wiki search',
    metadata: {
      enabled: false,
      url: 'http://wikisearch.surge.sh/{query}',
    },
  },
  {
    name: 'Scholarpedia',
    metadata: {
      enabled: false,
      url: 'http://www.scholarpedia.org/w/index.php?search={query}&button=&title=Special%3ASearch',
    },
  },
  {
    name: 'Kickass Torrents',
    metadata: {
      enabled: false,
      url: 'http://desotorrent.com/search/{query}/',
    },
  },
  {
    name: 'Skytorrents',
    metadata: {
      enabled: false,
      url: 'https://www.skytorrents.in/search/all/ed/1/?q={query}',
    },
  },
  {
    name: 'Arxiv',
    metadata: {
      enabled: false,
      url: 'https://newcatalog.library.cornell.edu/search?q={query}',
    },
  },
  {
    name: 'Arxiv (books)',
    metadata: {
      enabled: false,
      url: 'https://newcatalog.library.cornell.edu/?f%5Bformat%5D%5B%5D=Book&q={query}&search_field=all_fields',
    },
  },
  {
    name: 'Arxiv (thesis)',
    metadata: {
      enabled: false,
      url: 'https://newcatalog.library.cornell.edu/?f%5Bformat%5D%5B%5D=Thesis&q={query}&search_field=all_fields',
    },
  },
  {
    name: 'Metacademy',
    metadata: {
      enabled: false,
      url: 'https://www.metacademy.org/search?q={query}',
    },
  },
  {
    name: 'MIT OpenCourseware PDFs',
    metadata: {
      enabled: false,
      url: 'https://search.mit.edu/search?__EVENTTARGET=&__EVENTARGUMENT=&client=mit&getfields=*&output=xml_no_dtd&proxystylesheet=https%3A%2F%2Focw.mit.edu%2Fsearch%2Fgoogle-ocw.xsl&proxyreload=1&as_dt=i&oe=utf-8&btnG.x=4&btnG.y=10&filter=0&site=ocw&q={query}+filetype%3Apdf&getfields=*&sectionlimit=WT%252Ecg_s:Course+Home%7CWT%252Ecg_s:Resource+Home&oe=utf-8&is_secure=0&sort=date:D:L:d1',
    },
  },
  {
    name: 'Khan Academy',
    metadata: {
      enabled: false,
      url: 'https://www.khanacademy.org/search?referer=%2F&page_search_query={query}',
    },
  },
  {
    name: 'd: GoDoc',
    metadata: {
      enabled: false,
      url: 'https://godoc.org/?q={query}',
    },
  },
  {
    name: 'd: GoDev',
    metadata: {
      enabled: false,
      url: 'https://pkg.go.dev/search?q={query}',
    },
  },
  {
    name: 'd: Go search',
    metadata: {
      enabled: false,
      url: 'http://go-search.org/search?q={query}',
    },
  },
  {
    name: 'GitHub (Go)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?q={query}+language:go',
    },
  },
  {
    name: 'GitHub (Java)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?l=Java&q={query}&type=Repositories&utf8=✓',
    },
  },
  {
    name: 'GitHub (Go) (most stars)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?o=desc&q={query}+language%3Ago&s=stars&type=Repositories',
    },
  },
  {
    name: 'd: Git logs (go)',
    metadata: {
      enabled: false,
      url: 'http://www.gitlogs.com/most_popular?from=last-week&language=Go&topic={query}',
    },
  },
  {
    name: 'Google trends (30 days)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/trends/explore?date=today%201-m&q={query}',
    },
  },
  {
    name: 'Google trends (1 day)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/trends/explore?date=now%201-d&q={query}',
    },
  },
  {
    name: 'Google trends (1 year)',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/trends/explore?q={query}',
    },
  },
  {
    name: 'GitHub (Shell)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?l=Shell&q={query}&type=Repositories&utf8=%E2%9C%93',
    },
  },
  {
    name: 'GitHub (Go) (recent)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://GitHub.com/search?o=desc&q={query}+language%3Ago&s=updated&type=Repositories',
    },
  },
  {
    name: 'Vimeo',
    metadata: {
      enabled: false,
      url: 'https://vimeo.com/search?q={query}',
    },
  },
  {
    name: 'Twitter (recent)',
    icon: 'twitter',
    metadata: {
      enabled: true,
      url: 'https://twitter.com/search?f=tweets&vertical=default&q={query}&src=typd',
    },
  },
  {
    name: 'Keyboard Maestro (wiki)',
    metadata: {
      enabled: false,
      url: 'https://wiki.keyboardmaestro.com/Home_Page?do=search&id={query}',
    },
  },
  {
    name: 'Emojipedia',
    metadata: {
      enabled: false,
      url: 'https://emojipedia.org/search/?q={query}',
    },
  },
  {
    name: 'OpenStreatMap',
    metadata: {
      enabled: false,
      url: 'http://www.openstreetmap.org/search?query={query}',
    },
  },
  {
    name: 'StartPage',
    metadata: {
      enabled: false,
      url: 'https://www.startpage.com/do/metasearch.pl?query={query}',
    },
  },
  {
    name: 'Searx',
    metadata: {
      enabled: false,
      url: 'https://searx.tk/?q={query}',
    },
  },
  {
    name: 'Qwant',
    metadata: {
      enabled: false,
      url: 'https://www.qwant.com/?q={query}&t=all',
    },
  },
  {
    name: 'DuckDuckGo',
    icon: 'duckduckgo',
    metadata: {
      enabled: true,
      url: 'https://duckduckgo.com/?q={query}',
    },
  },
  {
    name: 'd: VS Code Docs',
    metadata: {
      enabled: false,
      url: 'https://code.visualstudio.com/Search?q={query}',
    },
  },
  {
    name: 'Google Maps',
    icon: 'google_maps',
    metadata: {
      enabled: true,
      url: 'https://www.google.com/maps/place/{query}',
    },
  },
  {
    name: 'Reddit: Videos',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/videos/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Bitcoin wiki',
    metadata: {
      enabled: false,
      url: 'https://en.bitcoin.it/w/index.php?search={query}&title=Special%3ASearch&go=Go',
    },
  },
  {
    name: 'Reddit (subreddits)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/subreddits/search?q={query}',
    },
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    metadata: {
      enabled: true,
      url: 'https://www.youtube.com/results?search_query={query}',
    },
  },
  {
    name: 'Google books',
    icon: 'google',
    metadata: {
      enabled: false,
      url: 'https://www.google.com/search?tbm=bks&q={query}',
    },
  },
  {
    name: 'Patents',
    metadata: {
      enabled: false,
      url: 'http://patents.com/search/?top_keyword={query}',
    },
  },
  {
    name: 'Google drive',
    icon: 'google_drive',
    metadata: {
      enabled: true,
      url: 'https://drive.google.com/drive/search?q={query}',
    },
  },
  {
    name: 'Amazon',
    icon: 'amazon',
    metadata: {
      enabled: true,
      url: 'https://www.amazon.com/gp/search?ie=UTF8&keywords={query}',
    },
  },
  {
    name: 'Alfred',
    metadata: {
      enabled: false,
      url: 'https://www.alfredapp.com/search/?q={query}',
    },
  },
  {
    name: 'Reddit (users)',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/user/{query}/',
    },
  },
  {
    name: 'Reddit: Unix porn',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/unixporn/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Bing',
    metadata: {
      enabled: false,
      url: 'http://www.bing.com/search?q={query}',
    },
  },
  {
    name: 'Bing (images)',
    metadata: {
      enabled: false,
      url: 'http://www.bing.com/images/search?q={query}',
    },
  },
  {
    name: 'd: Hackage',
    metadata: {
      enabled: false,
      url: 'http://hackage.haskell.org/packages/search?terms={query}',
    },
  },
  {
    name: 'VS Code market',
    metadata: {
      enabled: false,
      url: 'https://marketplace.visualstudio.com/search?term={query}&target=VSCode&category=All%20categories&sortBy=Relevancev',
    },
  },
  {
    name: 'Sublime Text packages',
    metadata: {
      enabled: false,
      url: 'https://packagecontrol.io/search/{query}',
    },
  },
  {
    name: 'f: Sublime Text',
    metadata: {
      enabled: false,
      url: 'https://forum.sublimetext.com/search?q={query}',
    },
  },
  {
    name: 'GitBook',
    metadata: {
      enabled: false,
      url: 'https://www.gitbook.com/search?q={query}',
    },
  },
  {
    name: 'GitBook (most stars)',
    metadata: {
      enabled: false,
      url: 'https://www.gitbook.com/search?q={query}&page=0&type=books&sort=stars',
    },
  },
  {
    name: 'GitBook (recent)',
    metadata: {
      enabled: false,
      url: 'https://www.gitbook.com/search?q={query}&page=0&type=books&sort=updated',
    },
  },
  {
    name: 'Stack Exchange: Stack Overflow (tags)',
    icon: 'stackoverflow',
    metadata: {
      enabled: false,
      url: 'https://stackoverflow.com/questions/tagged/{query}',
    },
  },
  {
    name: 'd: PyTorch',
    metadata: {
      enabled: false,
      url: 'http://pytorch.org/tutorials/search.html?q={query}&check_keywords=yes&area=default',
    },
  },
  {
    name: 'Vim wiki',
    metadata: {
      enabled: false,
      url: 'http://vim.wikia.com/wiki/Special:Search?query={query}',
    },
  },
  {
    name: 'Reddit: Hearthstone',
    icon: 'reddit',
    metadata: {
      enabled: false,
      url: 'https://www.reddit.com/r/hearthstone/search?q={query}&restrict_sr=on&sort=relevance&t=all',
    },
  },
  {
    name: 'Ncatlab',
    metadata: {
      enabled: false,
      url: 'https://ncatlab.org/nlab/search?query={query}',
    },
  },
  {
    name: 'Dblp',
    metadata: {
      enabled: false,
      url: 'http://dblp.uni-trier.de/search?q={query}',
    },
  },
  {
    name: 'Researchr',
    metadata: {
      enabled: false,
      url: 'https://researchr.org/search/publication/{query}',
    },
  },
  {
    name: 'Journal of Functional programming',
    metadata: {
      enabled: false,
      url: 'https://www.cambridge.org/core/journals/journal-of-functional-programming/listing?q={query}&searchWithinIds=49AD4731AAB0E94D8EF98BBB4EE56A7F',
    },
  },
  {
    name: 'Bandcamp',
    metadata: {
      enabled: false,
      url: 'https://bandcamp.com/search?q={query}',
    },
  },
  {
    name: 'Genius',
    metadata: {
      enabled: false,
      url: 'https://genius.com/search?q={query}',
    },
  },
  {
    name: 'd: ClojureDocs',
    metadata: {
      enabled: false,
      url: 'https://clojuredocs.org/search?q={query}',
    },
  },
  {
    name: 'GitHub (Clojure) (best match)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?l=&o=desc&q={query}+language%3AClojure&s=&type=Repositories',
    },
  },
  {
    name: 'GitHub (Clojure) (most stars)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?l=&o=desc&q={query}+language%3AClojure&s=stars&type=Repositories',
    },
  },
  {
    name: 'GitHub (Clojure) (recent updated)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?l=&o=desc&q={query}+language%3AClojure&s=updated&type=Repositories',
    },
  },
  {
    name: 'Academic Torrents',
    metadata: {
      enabled: false,
      url: 'http://academictorrents.com/browse.php?search={query}',
    },
  },
  {
    name: '1337x',
    metadata: {
      enabled: false,
      url: 'https://1337x.to/search/{query}/1/',
    },
  },
  {
    name: 'GitHub (C#) (best match)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?q={query}+language%3AC%23&type=Repositories',
    },
  },
  {
    name: 'GitHub (C#) (most stars)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?q={query}+language%3AC%23&s=stars&type=Repositories',
    },
  },
  {
    name: 'GitHub (C#) (recent updated)',
    icon: 'github',
    metadata: {
      enabled: false,
      url: 'https://github.com/search?q={query}+language%3AC%23&s=updated&type=Repositories',
    },
  },
  {
    name: 'CoinMarketCap',
    metadata: {
      enabled: false,
      url: 'https://coinmarketcap.com/search/?q={query}',
    },
  },
  {
    name: 'd: Brightscript',
    metadata: {
      enabled: false,
      url: 'https://developer.roku.com/search?qs={query}',
    },
  },
  {
    name: 'f: Roku developer forums',
    metadata: {
      enabled: false,
      url: 'https://community.roku.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&filter=location&location=category:channel-developers&q={query}',
    },
  },
];
