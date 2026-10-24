window.MODULES = {
  sdt: {
    title: "Semantic Data Technologies",
    code: "SDT",
    strapline: "Make data meaningful, connected and machine-understandable.",
    summary: "A twelve-day course that traces the Semantic Web from ontology engineering, OWL and description logics through RDF, linked data and reasoning, on to SPARQL against a Fuseki endpoint with Python, graph visualisation, natural-language extraction and its evaluation. The course concludes with student presentations.",
    tools: "Protégé, OWL, RDF/RDFS, SPARQL 1.1, Python, the movie dataset and Apache Jena Fuseki",
    outcomes: ["Explain the Semantic Web, RDF, RDFS and linked data", "Model and reason over ontologies in OWL and description logics", "Query and update knowledge graphs with SPARQL, including federated endpoints", "Extract and evaluate entities and relationships from natural language", "Communicate results in a final presentation"],
    days: [
      [1, "The Semantic Web and Semantic Search", "What the Semantic Web is, why connected machine-readable data matters, and how semantic search differs from keyword search", "Concept map and discussion"],
      [2, "Ontology Engineering and Graph Models", "Classes, properties and individuals as a graph model, and the engineering decisions behind designing one", "Sketch a simple ontology"],
      [3, "OWL and Description Logics", "OWL constructs and class expressions read against their description-logic foundations", "Model class restrictions in Protégé"],
      [4, "RDF, RDFS and Linked Data", "Triples, IRIs and literals, the RDFS vocabulary, and linking datasets across the Web", "Create and inspect RDF triples"],
      [5, "Reasoning, Entailment and Consistency", "Inference over ontologies, what entailment means, and checking that a knowledge base stays consistent", "Run a reasoner and interpret the results"],
      [6, "Fuseki, SPARQL Endpoints and Python", "Publishing a dataset through Apache Jena Fuseki and querying an endpoint from Python", "Fuseki endpoint practical with Python"],
      [7, "Natural Language Processing and SPARQL Foundations", "Extracting structure from natural-language text, then the SELECT/WHERE basics needed to query it", "Text-to-query exercise"],
      [8, "Graph Visualisation, Aggregation and SPARQL 1.1", "Visualising graphs and using aggregates, GROUP BY and the wider SPARQL 1.1 feature set", "Aggregation queries and visualisation"],
      [9, "Named Entity Recognition and Evaluation", "NER approaches and how to judge extraction quality with precision, recall and error analysis", "NER exercise with evaluation"],
      [10, "Mapping Language to Ontologies and Expressive SPARQL", "Mapping natural language and source schemas onto ontology terms, then querying with property paths and subqueries", "Mapping and expressive query practice"],
      [11, "Query Forms, Updates, Federation and Responsible Scholarship", "SELECT, ASK, CONSTRUCT and DESCRIBE, INSERT/DELETE updates, federated queries, and the licensing, attribution and ethics of shared data", "Update and federated query clinic"],
      [12, "Presentations Schedule", "Presenting project work and discussing results", "Student presentations"]
    ]
  },
  aml: {
    title: "Advanced Machine Learning",
    code: "AML",
    strapline: "Move from fitting models to designing reliable learning systems.",
    summary: "This module develops advanced modelling, experimental and interpretive skills, with emphasis on selecting methods for the problem rather than applying algorithms mechanically.",
    tools: "Python, NumPy, pandas, scikit-learn, XGBoost, SHAP and Jupyter/Colab",
    outcomes: ["Design robust machine-learning experiments", "Compare linear, kernel, ensemble and probabilistic methods", "Handle dimensionality and unstructured relationships", "Interpret uncertainty and model behaviour", "Communicate limitations and deployment risks"],
    weeks: [
      ["1", "Learning Problems and Experimental Design", "Tasks, variables, baselines, leakage and reproducible workflows", "Baseline notebook"],
      ["2", "Representation and Data Preparation", "Missingness, encoding, scaling, imbalance and feature construction", "Pipeline lab"],
      ["3", "Regularised Linear Models", "Bias–variance trade-off, L1/L2 penalties and model selection", "Derivation + code"],
      ["4", "Kernel Methods and Support Vector Machines", "Margins, kernels, dual intuition and hyperparameter search", "SVM lab"],
      ["5", "Tree Ensembles and Boosting", "Random forests, gradient boosting, XGBoost and feature importance", "Benchmark study"],
      ["6", "Unsupervised Learning", "Clustering, mixture models, validation and interpreting latent groups", "Clustering challenge"],
      ["7", "Dimensionality Reduction", "PCA, manifold learning and visualisation without overclaiming", "Embedding lab"],
      ["8", "Probabilistic Machine Learning", "Likelihood, Bayesian reasoning, calibration and uncertainty", "Calibration lab"],
      ["9", "Graph-Based Machine Learning", "Graph representations, node features, link prediction and message passing", "Graph notebook"],
      ["10", "Explainability and Responsible ML", "Global/local explanations, fairness, robustness and documentation", "Model audit"],
      ["11", "Deployment and Monitoring", "Distribution shift, drift, reproducibility and human oversight", "Deployment plan"],
      ["12", "Research-Style Evaluation", "Ablation, statistical comparison, reporting and project synthesis", "Project showcase"]
    ]
  },
  dl: {
    title: "Neural Networks and Deep Learning",
    code: "DL",
    strapline: "Understand what deep networks learn, how they learn and when to trust them.",
    summary: "This module builds neural networks from their mathematical foundations and progresses to contemporary architectures for images, sequences, graphs and generative modelling.",
    tools: "Python, PyTorch, torchvision, Hugging Face and Google Colab",
    outcomes: ["Derive and implement forward and backward propagation", "Train stable neural networks using modern optimisation", "Select architectures for images, sequences and graphs", "Use transfer learning and generative methods", "Evaluate robustness, explainability and computational cost"],
    weeks: [
      ["1", "From Perceptrons to Neural Networks", "Linear units, activations, multilayer networks and representation learning", "Build a neuron"],
      ["2", "Forward Propagation and Loss Functions", "Tensor shapes, logits, regression/classification losses and computation graphs", "PyTorch basics"],
      ["3", "Backpropagation Step by Step", "Chain rule, gradients, automatic differentiation and gradient checking", "Manual derivation"],
      ["4", "Optimisation and Regularisation", "SGD, momentum, Adam, schedules, weight decay, dropout and normalisation", "Training clinic"],
      ["5", "Convolutional Neural Networks", "Convolution, receptive fields, pooling and image-classification design", "CNN lab"],
      ["6", "Transfer Learning", "Pretraining, frozen features, fine-tuning and domain shift", "Image project"],
      ["7", "Sequence Models", "RNNs, LSTMs, gated memory and sequence learning", "Sequence lab"],
      ["8", "Attention and Transformers", "Queries, keys, values, self-attention, position and encoder/decoder design", "Attention notebook"],
      ["9", "Autoencoders and Generative Models", "Latent spaces, VAEs, GANs and diffusion-model intuition", "Generation lab"],
      ["10", "Graph Neural Networks", "Message passing, aggregation, node classification and graph-level tasks", "GNN lab"],
      ["11", "Interpretable and Robust Deep Learning", "Saliency, adversarial failure, uncertainty and responsible evaluation", "Network audit"],
      ["12", "Efficient Deployment and Synthesis", "Compression, inference, monitoring and communicating experimental evidence", "Project showcase"]
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-module]');
  if (!root) return;
  const module = window.MODULES[root.dataset.module];
  if (!module) return;
  document.title = `${module.title} | ARU × CJLU`;
  document.querySelector('[data-module-code]').textContent = module.code;
  document.querySelector('[data-module-title]').textContent = module.title;
  document.querySelector('[data-module-strapline]').textContent = module.strapline;
  document.querySelector('[data-module-summary]').textContent = module.summary;
  document.querySelector('[data-module-tools]').textContent = module.tools;
  document.querySelector('[data-module-outcomes]').innerHTML = module.outcomes.map(item => `<li>${item}</li>`).join('');
  // The SDT module has a 12-day programme; AML and DL retain their weekly outlines.
  if (Array.isArray(module.days)) {
    const topicIndex = document.querySelector('[data-module-topics]');
    const dayList = document.querySelector('[data-module-days]');
    if (topicIndex) {
      topicIndex.innerHTML = module.days.map(([day, topic]) => `
        <a class="sdt-topic-link" href="#day-${day}">
          <span class="sdt-topic-day">Day ${String(day).padStart(2, '0')}</span>
          <span class="sdt-topic-name">${topic}</span>
          <span class="sdt-topic-arrow" aria-hidden="true">↗</span>
        </a>`).join('');
    }
    if (dayList) {
      dayList.innerHTML = module.days.map(([day, topic, scope, activity]) => `
        <tr id="day-${day}">
          <td>${day}</td>
          <td><strong>${topic}</strong><br>${scope}</td>
          <td><span class="tag">${activity}</span></td>
        </tr>`).join('');
    }
  } else {
    const weeklyTable = document.querySelector('[data-module-weeks]');
    if (weeklyTable) {
      weeklyTable.innerHTML = module.weeks.map(week => `
        <tr><td>${week[0]}</td><td><strong>${week[1]}</strong><br>${week[2]}</td><td><span class="tag">${week[3]}</span></td></tr>`).join('');
    }
  }
});
