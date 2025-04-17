import React, { useState } from 'react';

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
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Superposition</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">Unlike classical bits that must be either 0 or 1, qubits can exist in multiple states simultaneously, similar to a spinning coin that's both heads and tails until observed.</p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Visualization: Classical Bit vs Qubit]</div>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Entanglement</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">When qubits become entangled, the state of one instantly affects the other, regardless of distance - Einstein called this "spooky action at a distance."</p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Visualization: Quantum Entanglement]</div>
                </div>
              </div>

              {/* Applications & Challenges */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Why It Matters</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
                    <li>Revolutionary advances in cryptography</li>
                    <li>Accelerated drug discovery</li>
                    <li>Enhanced climate modeling</li>
                    <li>Optimization of financial models</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Current Challenges</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
                    <li>Maintaining qubit stability</li>
                    <li>Error correction complexity</li>
                    <li>Scaling quantum systems</li>
                    <li>Cost and accessibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="encryption-threat" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">2. The Threat to Current Encryption</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Current Encryption Landscape</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">Modern digital security relies heavily on RSA and ECC encryption for protecting sensitive data in banking, healthcare, and government communications.</p>
                <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Diagram: Current Encryption Methods]</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Shor's Algorithm</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">This quantum algorithm can efficiently factor large numbers, potentially breaking RSA encryption in hours instead of billions of years.</p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Visualization: Shor's Algorithm Impact]</div>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Grover's Algorithm</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">While less dramatic than Shor's, this algorithm could significantly weaken symmetric encryption methods like AES.</p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Visualization: Classical vs Quantum Breaking Times]</div>
                </div>
              </div>
            </div>
          </section>

          <section id="post-quantum" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">3. What is Post-Quantum Cryptography?</h2>
            
            <div className="space-y-8">
              {/* PQC Methods */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Lattice-based Cryptography</h3>
                  <p className="text-base md:text-lg lg:text-xl mb-4">Uses complex mathematical structures called lattices to create encryption that even quantum computers struggle to break.</p>
                  <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Visualization: Lattice Structure]</div>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Other PQC Methods</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
                    <li>Hash-based signatures</li>
                    <li>Code-based cryptography</li>
                    <li>Multivariate cryptography</li>
                  </ul>
                </div>
              </div>

              {/* Standards & Adoption */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">NIST Standards Progress</h3>
                <p className="text-base md:text-lg lg:text-xl mb-4">NIST is leading the standardization of quantum-resistant cryptographic algorithms, with CRYSTALS-Kyber and CRYSTALS-Dilithium among the selected candidates.</p>
                <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Timeline: PQC Standardization Process]</div>
              </div>
            </div>
          </section>

          <section id="timeline" className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">4. Timeline and Next Steps</h2>
            
            <div className="space-y-8">
              {/* Timeline */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Key Milestones</h3>
                <div className="bg-gray-700 p-2 rounded mt-4 max-w-lg mx-auto h-48 flex items-center justify-center text-gray-400">[Interactive Timeline Visualization]</div>
              </div>

              {/* Recommendations */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Immediate Actions</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
                    <li>Audit current cryptographic usage</li>
                    <li>Develop migration strategy</li>
                    <li>Monitor NIST standards</li>
                    <li>Train security teams</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 lg:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Long-term Planning</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
                    <li>Implement crypto-agility</li>
                    <li>Test PQC solutions</li>
                    <li>Update security policies</li>
                    <li>Regular risk assessment</li>
                  </ul>
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
                <h4 className="font-medium mb-2 text-gray-400">Technical Resources</h4>
                <ul className="space-y-2">
                  <li><a href="https://www.nist.gov/" className="text-blue-400 hover:underline">NIST Post-Quantum Cryptography</a></li>
                  <li><a href="https://quantum-computing.ibm.com/" className="text-blue-400 hover:underline">IBM Quantum Computing</a></li>
                  <li><a href="https://pqcrypto.org/" className="text-blue-400 hover:underline">PQCrypto Organization</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-gray-400">Academic Papers</h4>
                <ul className="space-y-2">
                  <li><a href="https://arxiv.org/abs/quant-ph/9508027" className="text-blue-400 hover:underline">Shor's Algorithm (1994)</a></li>
                  <li><a href="https://www.nature.com/articles/nature23461" className="text-blue-400 hover:underline">Quantum Supremacy Paper</a></li>
                  <li><a href="https://csrc.nist.gov/Projects/post-quantum-cryptography" className="text-blue-400 hover:underline">NIST PQC Standards</a></li>
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
