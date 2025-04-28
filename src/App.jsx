import React, { useState } from 'react';
import bitDiff from './assets/bit-diff.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "1. Quantum Computing", href: "#quantum-computing" },
    { title: "2. Encryption Threat", href: "#encryption-threat" },
    { title: "3. Post-Quantum", href: "#post-quantum" },
    { title: "4. Timeline", href: "#timeline" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-tight">QuantumSafe</span>
            </div>

            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-label="Menu"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-md shadow-lg transition-all duration-200 ${
                  isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <div className="py-1">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-blue-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full px-4 md:px-8 lg:px-12 py-8">
        <div className="max-w-[1920px] mx-auto">
          <section id="quantum-computing" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">1. What is Quantum Computing?</h2>
            
            <div className="space-y-8">
              {/* Introduction */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                  While traditional computers process information in bits (0s and 1s), quantum computers leverage quantum mechanics to perform calculations in ways that classical computers cannot.
                </p>
              </div>

              {/* Basic Principles */}
              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Superposition: Core Difference</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    Unlike classical bits that must be either 0 or 1, qubits can exist in multiple states simultaneously. This is similar to a spinning coin that's both heads and tails until observed. In quantum computing, this means a qubit can be in a combination of |0⟩ and |1⟩ states, represented by a probability amplitude. This unique property allows quantum computers to process multiple possibilities at once, exponentially increasing their computational power compared to classical computers.
                  </p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto overflow-hidden">
                    <img 
                      src={bitDiff} 
                      alt="Comparison between classical bits and qubits" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl mt-4 text-gray-300 italic">
                    Think of it like this: Instead of having to check each possibility one by one like a classical computer, a quantum computer gives you a bird's eye view of all possible solutions at once. It's like being able to see the entire maze from above, rather than having to walk through every path to find the exit.
                  </p>
                </div>
              </div>

              {/* Applications & Challenges */}
              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Future Applications</h3>
                  <ul className="list-disc list-inside space-y-4 text-base md:text-lg lg:text-xl">
                    <li>
                      <span className="font-semibold">Drug Discovery & Materials Science</span>
                      <p className="ml-6 mt-1 text-gray-300">Quantum computers can simulate molecular interactions at the quantum level, enabling rapid discovery of new drugs and materials with specific properties.</p>
                    </li>
                    <li>
                      <span className="font-semibold">Climate Modeling & Weather Prediction</span>
                      <p className="ml-6 mt-1 text-gray-300">By processing vast amounts of climate data and simulating complex atmospheric systems simultaneously, quantum computers could provide more accurate long-term climate predictions.</p>
                    </li>
                    <li>
                      <span className="font-semibold">Financial Optimization</span>
                      <p className="ml-6 mt-1 text-gray-300">Quantum algorithms can evaluate multiple investment strategies and market scenarios in parallel, potentially revolutionizing portfolio optimization and risk assessment.</p>
                    </li>
                    <li>
                      <span className="font-semibold">Artificial Intelligence</span>
                      <p className="ml-6 mt-1 text-gray-300">Quantum computing's ability to process complex patterns and relationships could accelerate machine learning and enable new types of AI models that are impossible on classical computers.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="encryption-threat" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">2. The Threat to Current Encryption</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">The Quantum Challenge</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">
                  Quantum computers pose a unique threat to our current encryption systems. While classical computers would take billions of years to break modern encryption, quantum computers could potentially do it in hours or days using specialized algorithms. This section explores which encryption methods are most at risk and why.
                </p>
              </div>

              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Current Encryption Landscape</h3>
                <p className="text-base md:text-lg lg:text-xl mb-6">Here are the main encryption methods most vulnerable to quantum computing attacks:</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">1. RSA Encryption</h4>
                    <p className="text-base md:text-lg mb-2">Uses the difficulty of factoring large numbers to secure data. Vulnerable to Shor's algorithm.</p>
                    <p className="text-sm md:text-base text-gray-300 italic">Example: Like trying to find which two large prime numbers were multiplied together to get a very big number. Easy to multiply, but extremely hard to factor back.</p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">2. Elliptic Curve Cryptography (ECC)</h4>
                    <p className="text-base md:text-lg mb-2">Uses mathematical properties of elliptic curves to create secure keys. Vulnerable to Shor's algorithm.</p>
                    <p className="text-sm md:text-base text-gray-300 italic">Example: Like trying to find where a ball would land after bouncing around a complex curve many times. Easy to calculate forward, but hard to trace backward.</p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">3. Diffie-Hellman Key Exchange</h4>
                    <p className="text-base md:text-lg mb-2">Allows two parties to establish a shared secret key over an insecure channel. Vulnerable to Shor's algorithm.</p>
                    <p className="text-sm md:text-base text-gray-300 italic">Example: Like mixing two colors together - easy to mix them, but hard to figure out the original colors from the result.</p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">4. AES Encryption</h4>
                    <p className="text-base md:text-lg mb-2">A symmetric encryption standard used worldwide. Vulnerable to Grover's algorithm.</p>
                    <p className="text-sm md:text-base text-gray-300 italic">Example: Like having a complex lock with many possible combinations. A quantum computer could try combinations much faster than a classical computer.</p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">5. SHA-2 Hash Functions</h4>
                    <p className="text-base md:text-lg mb-2">Used for data integrity and digital signatures. Vulnerable to Grover's algorithm.</p>
                    <p className="text-sm md:text-base text-gray-300 italic">Example: Like a unique fingerprint for data. A quantum computer could find different data with the same fingerprint more quickly.</p>
                  </div>
                </div>

                <p className="text-base md:text-lg mt-6 text-gray-300 italic">
                  Note: These are not the only encryption methods in use today, but they represent the ones with the highest risk of being broken by quantum computers using Shor's and Grover's algorithms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Shor's Algorithm</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    This quantum algorithm can efficiently factor large numbers and solve the discrete logarithm problem, which are the mathematical foundations of RSA and ECC encryption. While classical computers would take billions of years to break these codes, a quantum computer running Shor's algorithm could do it in hours or days.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    <span className="font-semibold">Impact on:</span>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      <li>RSA Encryption: Could factor the large numbers used in public keys</li>
                      <li>ECC: Could solve the elliptic curve discrete logarithm problem</li>
                      <li>Diffie-Hellman: Could break the key exchange by solving the discrete logarithm</li>
                    </ul>
                  </p>
                  <div className="bg-gray-700 p-4 rounded mt-4">
                    <h4 className="text-lg font-semibold mb-2">How Shor's Algorithm Works</h4>
                    <p className="text-base text-gray-300">
                      You're trying to guess the pattern in a combination lock, but it's not random. The combination repeats every so often.
                    </p>
                    <p className="text-base text-gray-300 mt-2">
                      <span className="font-semibold">Classically:</span> You'd try every number until it clicks.
                    </p>
                    <p className="text-base text-gray-300">
                      <span className="font-semibold">Shor's Algorithm:</span> Is like having a magic tuning fork that resonates with the lock's hidden period, revealing the pattern super fast.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Grover's Algorithm</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    While less dramatic than Shor's, Grover's algorithm provides a quadratic speedup for searching unsorted databases. This means it can find a secret key in roughly the square root of the time it would take a classical computer.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    <span className="font-semibold">Impact on:</span>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      <li>AES Encryption: Could reduce security from 128-bit to effectively 64-bit</li>
                      <li>SHA-2 Hash Functions: Could find collisions more quickly</li>
                      <li>Symmetric Key Systems: Could halve the effective key length</li>
                    </ul>
                  </p>
                  <div className="bg-gray-700 p-4 rounded mt-4">
                    <h4 className="text-lg font-semibold mb-2">How Grover's Algorithm Works</h4>
                    <p className="text-base text-gray-300">
                      Imagine you have a deck of cards face down, and only one is the ace of spades (the winner).
                    </p>
                    <p className="text-base text-gray-300 mt-2">
                      <span className="font-semibold">Classical Search:</span> You flip one card at a time. On average, it takes 26 tries.
                    </p>
                    <p className="text-base text-gray-300">
                      <span className="font-semibold">Grover's Quantum Search:</span> You have a magical magnifying glass that points you toward the correct card, speeding up your search dramatically, you find it in about √52 ≈ 7 steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="post-quantum" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">3. What is Post-Quantum Cryptography?</h2>
            
            <div className="space-y-8">
              {/* What is PQC */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Understanding Post-Quantum Cryptography</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">
                  Post-Quantum Cryptography (PQC) refers to cryptographic algorithms that are believed to be secure against both quantum and classical computers. These algorithms are designed to replace current public-key cryptosystems that are vulnerable to quantum attacks.
                </p>
                <div className="bg-gray-700 p-4 rounded mt-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">The "Harvest Now, Decrypt Later" Threat</h4>
                  <p className="text-base md:text-lg">
                    Attackers could be collecting encrypted data today, storing it, and waiting for quantum computers to become powerful enough to break the encryption. This means sensitive information encrypted today could be vulnerable in the future, making the transition to quantum-resistant cryptography urgent.
                  </p>
                </div>
              </div>

              {/* NIST Standards Progress */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">NIST Standards Progress</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">
                  The National Institute of Standards and Technology (NIST) is leading the standardization of quantum-resistant cryptographic algorithms. After a multi-year evaluation process, they have selected several algorithms for standardization:
                </p>
                <div className="bg-gray-700 p-4 rounded mt-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-4">NIST's Post-Quantum Cryptography Standardization Timeline</h4>
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h5 className="text-lg font-semibold mb-2">2016-2017: Call for Proposals</h5>
                      <p className="text-base text-gray-300">NIST initiated the process by requesting submissions for quantum-resistant cryptographic algorithms. They received 82 submissions from researchers worldwide.</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h5 className="text-lg font-semibold mb-2">2017-2019: Round 1 Evaluation</h5>
                      <p className="text-base text-gray-300">Initial analysis of all submissions, focusing on security, performance, and implementation characteristics. 69 algorithms advanced to the next round.</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h5 className="text-lg font-semibold mb-2">2019-2020: Round 2 Evaluation</h5>
                      <p className="text-base text-gray-300">Deeper analysis of remaining candidates, with focus on practical implementation and security proofs. 26 algorithms advanced to Round 3.</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h5 className="text-lg font-semibold mb-2">2020-2022: Round 3 Evaluation</h5>
                      <p className="text-base text-gray-300">Intensive analysis of final candidates, including real-world testing and security analysis. 7 algorithms were selected for standardization.</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h5 className="text-lg font-semibold mb-2">2022-2024: Final Standardization</h5>
                      <p className="text-base text-gray-300">Publication of final standards and implementation guidelines. Focus on CRYSTALS-Kyber (key encapsulation) and CRYSTALS-Dilithium (digital signatures).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mathematical Models */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Mathematical Approaches to PQC</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">
                  While researchers are exploring many different mathematical approaches to post-quantum cryptography, these three approaches currently show the most promise and are furthest along in the standardization process. Each offers unique advantages and challenges in the quest for quantum-resistant security.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Lattice-based Cryptography</h4>
                    <p className="text-base md:text-lg">Uses complex mathematical structures called lattices, which are resistant to both quantum and classical attacks. The security relies on the difficulty of finding the shortest vector in a high-dimensional lattice.</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Hash-based Cryptography</h4>
                    <p className="text-base md:text-lg">Uses cryptographic hash functions to create digital signatures. The security is based on the collision resistance of hash functions, which remains strong even against quantum computers.</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Code-based Cryptography</h4>
                    <p className="text-base md:text-lg">Uses error-correcting codes to create encryption schemes. The security relies on the difficulty of decoding a general linear code, which is believed to be hard even for quantum computers.</p>
                  </div>
                </div>
              </div>

              {/* Viable Algorithms */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Selected Finalist PQC Algorithms</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">CRYSTALS-Kyber</h4>
                    <p className="text-base md:text-lg">A lattice-based key encapsulation mechanism (KEM) selected by NIST for standardization. Offers strong security with relatively small key sizes and fast operations.</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">CRYSTALS-Dilithium</h4>
                    <p className="text-base md:text-lg">A lattice-based digital signature scheme also selected by NIST. Provides efficient signing and verification with strong security guarantees.</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">SPHINCS+</h4>
                    <p className="text-base md:text-lg">A hash-based signature scheme that offers strong security with relatively large signature sizes but simple implementation and verification.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="timeline" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">4. Timeline and Next Steps</h2>
            
            <div className="space-y-8">
              {/* Q-Day Estimates */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">When Will Quantum Computers Break Encryption?</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">
                  While exact predictions are difficult, most experts estimate that quantum computers capable of breaking current encryption could emerge between 2030 and 2040. This "Q-Day" could come earlier if there are unexpected breakthroughs in quantum computing technology.
                </p>
                <div className="bg-gray-700 p-4 rounded mt-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Why We Need to Start Now</h4>
                  <p className="text-base md:text-lg">
                    The transition to post-quantum cryptography is expected to take 10-15 years due to the complexity of updating systems, testing new algorithms, and ensuring backward compatibility. This means organizations should begin their transition by 2025 to be ready before Q-Day.
                  </p>
                </div>
              </div>

              {/* Preparation Timeline */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Preparation Timeline</h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-0 right-0 h-1 bg-blue-500 top-8"></div>
                  
                  {/* Timeline Items */}
                  <div className="grid grid-cols-4 gap-4 relative">
                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">2023-2025</h4>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm md:text-base font-semibold mb-2">Assessment Phase</p>
                        <ul className="text-xs md:text-sm space-y-1">
                          <li>• Inventory systems</li>
                          <li>• Identify critical data</li>
                          <li>• Test PQC in labs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">2025-2030</h4>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm md:text-base font-semibold mb-2">Planning & Early Implementation</p>
                        <ul className="text-xs md:text-sm space-y-1">
                          <li>• Develop strategies</li>
                          <li>• Update policies</li>
                          <li>• Begin PQC implementation</li>
                          <li>• Train teams</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">2030-2035</h4>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm md:text-base font-semibold mb-2">Full Implementation</p>
                        <ul className="text-xs md:text-sm space-y-1">
                          <li>• Migrate critical systems</li>
                          <li>• Update protocols</li>
                          <li>• Implement hybrid solutions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">2035-2040</h4>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm md:text-base font-semibold mb-2">Final Phase</p>
                        <ul className="text-xs md:text-sm space-y-1">
                          <li>• Complete transition</li>
                          <li>• Continuous monitoring</li>
                          <li>• Maintain crypto-agility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Blocks */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">What You Can Do</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Spread Awareness</h4>
                      <ul className="list-disc list-inside space-y-2 text-base">
                        <li>Share information about quantum threats with colleagues</li>
                        <li>Discuss PQC with your organization's IT department</li>
                        <li>Stay informed about NIST's PQC standardization progress</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Personal Preparation</h4>
                      <ul className="list-disc list-inside space-y-2 text-base">
                        <li>Learn about PQC and its importance</li>
                        <li>Follow developments in quantum computing</li>
                        <li>Support organizations transitioning to PQC</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">What Companies Should Do Now</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Immediate Actions</h4>
                      <ul className="list-disc list-inside space-y-2 text-base">
                        <li>Conduct a cryptographic inventory</li>
                        <li>Identify systems using vulnerable algorithms</li>
                        <li>Begin testing PQC solutions in development environments</li>
                        <li>Train security teams on PQC concepts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Strategic Planning</h4>
                      <ul className="list-disc list-inside space-y-2 text-base">
                        <li>Develop a PQC migration roadmap</li>
                        <li>Allocate resources for PQC implementation</li>
                        <li>Establish partnerships with PQC solution providers</li>
                        <li>Create crypto-agility frameworks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-center py-8">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">References & Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-6xl mx-auto">
              <div>
                <h4 className="font-medium mb-2 text-gray-400">Official Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" className="text-blue-400 hover:underline">NIST's First PQC Standards</a>
                    <p className="text-sm text-gray-300">NIST's official announcement of the first three standardized post-quantum cryptographic algorithms.</p>
                  </li>
                  <li>
                    <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" className="text-blue-400 hover:underline">NIST PQC Project</a>
                    <p className="text-sm text-gray-300">NIST's comprehensive project page detailing their post-quantum cryptography standardization process.</p>
                  </li>
                  <li>
                    <a href="https://www.cisa.gov/quantum" className="text-blue-400 hover:underline">CISA Quantum Resources</a>
                    <p className="text-sm text-gray-300">Cybersecurity and Infrastructure Security Agency's resources on quantum computing and cybersecurity.</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-gray-400">Industry Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.microsoft.com/en-us/research/project/post-quantum-cryptography/" className="text-blue-400 hover:underline">Microsoft PQC Research</a>
                    <p className="text-sm text-gray-300">Microsoft's research initiative on post-quantum cryptography and implementation strategies.</p>
                  </li>
                  <li>
                    <a href="https://cloud.google.com/security/resources/post-quantum-cryptography" className="text-blue-400 hover:underline">Google Cloud PQC</a>
                    <p className="text-sm text-gray-300">Google Cloud's resources and implementation guidance for post-quantum cryptography.</p>
                  </li>
                  <li>
                    <a href="https://www.techtarget.com/searchsecurity/definition/post-quantum-cryptography" className="text-blue-400 hover:underline">TechTarget PQC Guide</a>
                    <p className="text-sm text-gray-300">A comprehensive guide explaining post-quantum cryptography concepts and implications.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
