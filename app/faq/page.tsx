export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">What is Fiorenza?</h2>
          <p>
            Fiorenza is a decentralized digital currency that enables instant payments to anyone, anywhere in the world.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">How does Fiorenza work?</h2>
          <p>
            Fiorenza uses peer-to-peer technology to operate with no central authority: managing transactions and
            issuing money are carried out collectively by the network.
          </p>
        </div>
        {/* Add more FAQ items */}
      </div>
    </div>
  )
}

