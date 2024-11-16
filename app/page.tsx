'use client'

import { useState } from 'react'

export default function Home() {
  const [idea, setIdea] = useState('')
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">AI Token Creator</h1>
          <p className="text-xl mb-8 text-purple-200">
            Share your token idea, and let AI handle the rest
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <label className="block text-lg mb-2">What's your token idea?</label>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="w-full h-32 px-4 py-2 rounded-lg bg-white/5 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Example: A token for dog lovers that supports animal shelters..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-purple-600 hover:bg-purple-500 transition-all"
            >
              Generate Token Details
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}