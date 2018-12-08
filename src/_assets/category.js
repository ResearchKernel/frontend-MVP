const category = [
  {
    type: 'Astrophysics',
    collapsed: false,
    code: 'astro-ph',
    sub: [
      {
        name: 'Cosmology and Nongalactic Astrophysics',
        code: 'astro-ph.CO',
        collapsed: false
      },
      {
        name: 'Earth and Planetary Astrophysics',
        code: 'astro-ph.EP',
        collapsed: false
      },
      {
        name: 'Astrophysics of Galaxies',
        code: 'astro-ph.GA',
        collapsed: false
      },
      {
        name: 'High Energy Astrophysical Phenomena',
        code: 'astro-ph.HE',
        collapsed: false
      },
      {
        name: 'Instrumentation and Methods for Astrophysics',
        code: 'astro-ph.IM',
        collapsed: false
      },
      {
        name: 'Solar and Stellar Astrophysics',
        code: 'astro-ph.SR',
        collapsed: false
      },
    ],
  },
  {
    type: 'Condensed Matter',
    collapsed: false,
    code: 'cond-mat',
    sub: [
      {
        name: 'Disordered Systems and Neural Networks',
        code: 'cond-mat.dis-nn',
        collapsed: false
      },
      {
        name: 'Mesoscale and Nanoscale Physics',
        code: 'cond-mat.mes-hall',
        collapsed: false
      },
      {
        name: 'Materials Science',
        code: 'cond-mat.mtrl-sci',
        collapsed: false
      },
      {
        name: 'Other Condensed Matter',
        code: 'cond-mat.other',
        collapsed: false
      },
      {
        name: 'Quantum Gases',
        code: 'cond-mat.quant-gas',
        collapsed: false
      },
      {
        name: 'Soft Condensed Matter',
        code: 'cond-mat.soft',
        collapsed: false
      },
      {
        name: 'Statistical Mechanics',
        code: 'cond-mat.stat-mech',
        collapsed: false
      },
      {
        name: 'Strongly Correlated Electrons',
        code: 'cond-mat.str-el',
        collapsed: false
      },
      {
        name: 'Superconductivity',
        code: 'cond-mat.supr-con',
        collapsed: false
      },
    ],
  },
  {
    type: 'General Relativity and Quantum Cosmology',
    collapsed: false,
    code: 'gr-qc',
    sub: [
      {
      name: 'General Relativity and Quantum Cosmology',
      code: 'gr-qc',
      collapsed: false
    }, ],
  },
  {
    type: 'High Energy Physics',
    collapsed: false,
    code: 'hep-',
    sub: [
      {
        name: 'High Energy Physics - Experiment',
        code: 'hep-ex',
        collapsed: false
      }, {
        name: 'High Energy Physics - Lattice',
        code: 'hep-lat',
        collapsed: false
      }, {
        name: 'High Energy Physics - Phenomenology',
        code: 'hep-ph',
        collapsed: false
      }, {
        name: 'High Energy Physics - Theory',
        code: 'hep-th',
        collapsed: false
      },
    ],
  },
  {
    type: 'Nonlinear Sciences',
    collapsed: false,
    code: 'nlin',
    sub: [
      {
      name: 'Adaptation and Self-Organizing Systems',
      code: 'nlin.AO',
      collapsed: false
    }, {
      name: 'Chaotic Dynamics',
      code: 'nlin.CD',
      collapsed: false
    }, {
      name: 'Cellular Automata and Lattice Gases',
      code: 'nlin.PS',
      collapsed: false
    }, {
      name: 'Pattern Formation and Solitons',
      code: 'gr-qc',
      collapsed: false
    }, {
      name: 'Exactly Solvable and Integrable Systems',
      code: 'nlin.SI',
      collapsed: false
    },],
  },
  {
    type: 'Nuclear Experiment',
    collapsed: false,
    code: 'nucl',
    sub: [
      {
      name: 'Nuclear Experiment',
      code: 'nucl-ex',
      collapsed: false
    }, {
      name: 'Nuclear Theory',
      code: 'nucl-th',
      collapsed: false
    }, ],
  },
  {
    type: 'Quantum Physics',
    collapsed: false,
    code: 'quant-ph',
    sub: [],
  },
  {
    type: 'Mathematics',
    collapsed: false,
    code: 'math',
    sub: [
      {
        name: 'Commutative Algebra',
        code: 'math.AC',
        collapsed: false
      }, {
        name: 'Analysis of PDEs',
        code: 'math.AP',
        collapsed: false
      }, {
        name: 'Algebraic Topology',
        code: 'math.AT',
        collapsed: false
      }, {
        name: 'Classical Analysis and ODEs',
        code: 'math.CA',
        collapsed: false
      }, {
        name: 'Combinatorics',
        code: 'math.CO',
        collapsed: false
      }, {
        name: 'Category Theory',
        code: 'math.CT',
        collapsed: false
      }, {
        name: 'Complex Variables',
        code: 'math.CV',
        collapsed: false
      }, {
        name: 'Differential Geometry',
        code: 'math.DG',
        collapsed: false
      }, {
        name: 'Dynamical Systems',
        code: 'math.DS',
        collapsed: false
      }, {
        name: 'Functional Analysis',
        code: 'math.FA',
        collapsed: false
      }, {
        name: 'General Mathematics',
        code: 'math.GM',
        collapsed: false
      }, {
        name: 'General Topology',
        code: 'math.GN',
        collapsed: false
      }, {
        name: 'Group Theory',
        code: 'math.GR',
        collapsed: false
      }, {
        name: 'Geometric Topology',
        code: 'math.GT',
        collapsed: false
      }, {
        name: 'History and Overview',
        code: 'math.MO',
        collapsed: false
      }, {
        name: 'Information Theory',
        code: 'math.IT',
        collapsed: false
      }, {
        name: 'K-Theory and Homology',
        code: 'math.KT',
        collapsed: false
      }, {
        name: 'Logic',
        code: 'math.LO',
        collapsed: false
      }, {
        name: 'Metric Geometry',
        code: 'math.MG',
        collapsed: false
      }, {
        name: 'Mathematical Physics',
        code: 'math.MP',
        collapsed: false
      }, {
        name: 'Numerical Analysis',
        code: 'math.NA',
        collapsed: false
      }, {
        name: 'Number Theory',
        code: 'math.NT',
        collapsed: false
      }, {
        name: 'Operator Algebras',
        code: 'math.OA',
        collapsed: false
      }, {
        name: 'Optimization and Control',
        code: 'math.OC',
        collapsed: false
      }, {
        name: 'Probability',
        code: 'math.PR',
        collapsed: false
      }, {
        name: 'Quantum Algebra',
        code: 'math.QA',
        collapsed: false
      }, {
        name: 'Rings and Algebras',
        code: 'math.RA',
        collapsed: false
      }, {
        name: 'Symplectic Geometry',
        code: 'math.SG',
        collapsed: false
      }, {
        name: 'Spectral Theory',
        code: 'math.SP',
        collapsed: false
      }, {
        name: 'Statistics Theory',
        code: 'math.ST',
        collapsed: false
      }, {
        name: 'Mathematical Physics',
        code: 'math-ph',
        collapsed: false
      },
    ],
  },
  {
    type: 'Computer Science',
    collapsed: false,
    code: 'cs',
    sub: [
      {
      name: 'Artificial Intelligence',
      code: 'cs.AI',
      collapsed: false
    },
    {
      name: 'Hardware Architecture',
      code: 'cs.AR',
      collapsed: false
    }, {
      name: 'Computational Complexity',
      code: 'cs.CC',
      collapsed: false
    }, {
      name: 'Computational Engineering, Finance, and Science',
      code: 'cs.CE',
      collapsed: false
    }, {
      name: 'Computational Geometry',
      code: 'cs.CG',
      collapsed: false
    }, {
      name: 'Computation and Language',
      code: 'cs.CL',
      collapsed: false
    }, {
      name: 'Cryptography and Security',
      code: 'cs.CR',
      collapsed: false
    }, {
      name: 'Computer Vision and Pattern Recognition',
      code: 'cs.CV',
      collapsed: false
    }, {
      name: 'Computers and Society',
      code: 'cs.CY',
      collapsed: false
    },
    {
      name: 'Databases',
      code: 'cs.DB',
      collapsed: false
    }, {
      name: 'Distributed, Parallel, and Cluster Computing',
      code: 'cs.DC',
      collapsed: false
    }, {
      name: 'Digital Libraries',
      code: 'cs.DL',
      collapsed: false
    }, {
      name: 'Discrete Mathematics',
      code: 'cs.DM',
      collapsed: false
    }, {
      name: 'Data Structures and Algorithms',
      code: 'cs.DS',
      collapsed: false
    }, {
      name: 'Emerging Technologies',
      code: 'cs.ET',
      collapsed: false
    }, {
      name: 'Formal Languages and Automata Theory',
      code: 'cs.FL',
      collapsed: false
    }, {
      name: 'General Literature',
      code: 'cs.Gl',
      collapsed: false
    }, {
      name: 'Graphics',
      code: 'cs.GR',
      collapsed: false
    }, {
      name: 'Computer Science and Game Theory',
      code: 'cs.GT',
      collapsed: false
    }, {
      name: 'Human-Computer Interaction',
      code: 'cs.HC',
      collapsed: false
    }, {
      name: 'Information Retrieval',
      code: 'cs.IR',
      collapsed: false
    }, {
      name: 'Information Theory',
      code: 'cs.IT',
      collapsed: false
    }, {
      name: 'Machine Learning',
      code: 'cs.LG',
      collapsed: false
    }, {
      name: 'Logic in Computer Science',
      code: 'cs.LO',
      collapsed: false
    }, {
      name: 'Multiagent Systems',
      code: 'cs.MA',
      collapsed: false
    }, {
      name: 'Multimedia',
      code: 'cs.MM',
      collapsed: false
    }, {
      name: 'Mathematical Software',
      code: 'cs.MS',
      collapsed: false
    }, {
      name: 'Numerical Analysis',
      code: 'cs.NA',
      collapsed: false
    }, {
      name: 'Neural and Evolutionary Computing',
      code: 'cs.NE',
      collapsed: false
    }, {
      name: 'Networking and Internet Architecture',
      code: 'cs.NI',
      collapsed: false
    }, {
      name: 'Other Computer Science',
      code: 'cs.OH',
      collapsed: false
    }, {
      name: 'Operating Systems',
      code: 'cs.OS',
      collapsed: false
    }, {
      name: 'Performance',
      code: 'cs.PF',
      collapsed: false
    }, {
      name: 'Programming Languages',
      code: 'cs.PL',
      collapsed: false
    }, {
      name: 'Robotics',
      code: 'cs.RO',
      collapsed: false
    }, {
      name: 'Symbolic Computation',
      code: 'cs.SC',
      collapsed: false
    }, {
      name: 'Sound',
      code: 'cs.SD',
      collapsed: false
    }, {
      name: 'Software Engineering',
      code: 'cs.SE',
      collapsed: false
    }, {
      name: 'Social and Information Networks',
      code: 'cs.SI',
      collapsed: false
    }, {
      name: 'Systems and Control',
      code: 'cs.SY',
      collapsed: false
    }, 
  ],
  },
  {
    type: 'Electrical Engineering and Systems Science',
    collapsed: false,
    code: 'eess',
    sub: [
      {
        name: 'Audio and Speech Processing',
        code: 'eess.AS',
        collapsed: false
      },
      {
        name: 'Image and Video Processing',
        code: 'eess.IV',
        collapsed: false
      }, {
        name: 'Signal Processing',
        code: 'eess.SP',
        collapsed: false
      },
    ],
  },
  {
    type: 'Physics',
    collapsed: false,
    code: 'physics',
    sub: [
       {
         name: 'Accelerator Physics',
         code: 'physics.acc-ph',
         collapsed: false
       },
       {
         name: 'Atmospheric and Oceanic Physics',
         code: 'physics.ao-ph',
         collapsed: false
       }, {
         name: 'Applied Physics',
         code: 'physics.acc-ph',
         collapsed: false
       }, {
         name: 'Accelerator Physics',
         code: 'physics.app-ph',
         collapsed: false
       }, {
         name: 'Atomic and Molecular Clusters',
         code: 'physics..atm-clus',
         collapsed: false
       }, {
         name: 'Atomic Physics',
         code: 'physics.atom-ph',
         collapsed: false
       }, {
         name: 'Biological Physics',
         code: 'physics.bio-ph',
         collapsed: false
       }, {
         name: 'Chemical Physics',
         code: 'physics.chem-ph',
         collapsed: false
       }, {
         name: 'Classical Physics',
         code: 'physics.class-ph',
         collapsed: false
       }, {
         name: 'Computational Physics',
         code: 'physics.comp-ph',
         collapsed: false
       }, {
         name: 'Data Analysis, Statistics and Probability',
         code: 'physics..data-an',
         collapsed: false
       }, {
         name: 'Physics Education',
         code: 'physics.ed-ph',
         collapsed: false
       }, {
         name: 'Fluid Dynamics',
         code: 'physics..flu-dyn',
         collapsed: false
       }, {
         name: 'General Physics',
         code: 'physics.gen-ph',
         collapsed: false
       }, {
         name: 'Geophysics',
         code: 'physics.geo-ph',
         collapsed: false
       }, {
         name: 'History and Philosophy of Physics',
         code: 'physics.hist-ph',
         collapsed: false
       }, {
         name: 'Instrumentation and Detectors',
         code: 'physics.ins-det',
         collapsed: false
       }, {
         name: 'Medical Physics',
         code: 'physics.med-ph',
         collapsed: false
       }, {
         name: 'Optics',
         code: 'physics.optics',
         collapsed: false
       }, {
         name: 'Plasma Physics',
         code: 'physics.plasm-ph',
         collapsed: false
       }, {
         name: 'Popular Physics',
         code: 'physics.pop-ph',
         collapsed: false
       }, {
         name: 'Physics and Society',
         code: 'physics.soc-ph',
         collapsed: false
       }, {
         name: 'Space Physics',
         code: 'physics.space-ph',
         collapsed: false
       },
    ],
  },
  {
    type: 'Statistics',
    collapsed: false,
    code: 'stat',
    sub: [
      {
      name: 'Applications',
      code: 'stat.AP',
      collapsed: false
    }, {
      name: 'Computation',
      code: 'stat.CO',
      collapsed: false
    }, {
      name: 'Methodology',
      code: 'stat.ME',
      collapsed: false
    }, {
      name: 'Machine Learning',
      code: 'stat.ML',
      collapsed: false
    }, {
      name: 'Other Statistics',
      code: 'stat.OT',
      collapsed: false
    }, {
      name: 'Statistics Theory',
      code: 'stat.TH',
      collapsed: false
    },],
  },
  {
    type: 'Quantitative Biology',
    collapsed: false,
    code: 'q-bio',
    sub: [
      {
      name: 'Biomolecules',
      code: 'q-bio.BM',
      collapsed: false
    }, {
      name: 'Cell Behavior',
      code: 'q-bio.CB',
      collapsed: false
    }, {
      name: 'Genomics',
      code: 'q-bio.GN',
      collapsed: false
    }, {
      name: 'Molecular Networks',
      code: 'q-bio.MN',
      collapsed: false
    }, {
      name: 'Neurons and Cognition',
      code: 'q-bio.NC',
      collapsed: false
    }, {
      name: 'Other Quantitative Biology',
      code: 'q-bio.OT',
      collapsed: false
    }, {
      name: 'Populations and Evolution',
      code: 'q-bio.PE',
      collapsed: false
    }, {
      name: 'Quantitative Methods',
      code: 'q-bio.QM',
      collapsed: false
    }, {
      name: 'Subcellular Processes',
      code: 'q-bio.SC',
      collapsed: false
    }, {
      name: 'Tissues and Organs',
      code: 'q-bio.TO',
      collapsed: false
    },],},
 {
   type: 'Quantitative Finance',
   collapsed: false,
   code: 'q-fin',
   sub: [
     {
      name: 'Computational Finance',
      code: 'q-fin.CP',
      collapsed: false
    }, {
      name: 'Economics',
      code: 'q-fin.EC',
      collapsed: false
    }, {
      name: 'General Finance',
      code: 'q-fin.GN',
      collapsed: false
    }, {
      name: 'Mathematical Finance',
      code: 'q-fin.MF',
      collapsed: false
    }, {
      name: 'Portfolio Management',
      code: 'q-fin.PM',
      collapsed: false
    }, {
      name: 'Pricing of Securities',
      code: 'q-fin.PR',
      collapsed: false
    }, {
      name: 'Risk Management',
      code: 'q-fin.RM',
      collapsed: false
    }, {
      name: 'Statistical Finance',
      code: 'q-fin.ST',
      collapsed: false
    }, {
      name: 'Trading and Market Microstructure',
      code: 'q-fin.TR',
      collapsed: false
    },],
  }
];

export default category;