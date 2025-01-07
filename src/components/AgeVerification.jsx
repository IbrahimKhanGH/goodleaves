import { useState, useEffect } from 'react'

function AgeVerification() {
  const [showModal, setShowModal] = useState(true)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (verified) {
      setIsVerified(true)
      setShowModal(false)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true')
    setIsVerified(true)
    setShowModal(false)
  }

  if (!showModal || isVerified) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Verification Required</h2>
          <div className="h-px bg-gray-200 my-4"></div>
          <p className="text-gray-600 mb-6">
            You must be 21 years or older to visit Good Leaves.
          </p>
          <div className="space-y-4">
            <button
              onClick={handleVerify}
              className="w-full bg-gl-green text-white py-3 px-6 rounded-lg hover:bg-gl-green/90 transition-colors"
            >
              I am 21 or older
            </button>
            <a
              href="https://www.google.com"
              className="block w-full text-gray-500 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              I am not 21
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeVerification 