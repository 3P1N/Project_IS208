"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Download, FileText, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "../components/ui/button"

export const TimelinePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [pdfStates, setPdfStates] = useState({
    left: {
      currentPage: 1,
      numPages: null,
      scale: 1,
      failed: false,
    },
    right: {
      currentPage: 1,
      numPages: null,
      scale: 1,
      failed: false,
    },
  })

  // Sample PDF URLs - replace with your actual PDFs
  const pdfUrls = {
    "17-03-2025": {
      left: "/Project_IS208/BienBan1.pdf",
      right: "/Project_IS208/PhanCong1.pdf",
    },
    // "2024": {
    //   left: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //   right: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    // },
    // "2023": {
    //   left: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //   right: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    // },
    // "2022": {
    //   left: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //   right: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    // },
  }

  const timelineEvents = [
    {
      year: "17-03-2025",
      title: "Phân công ban đầu",
      description: "Đội ngũ dự án đã được phân công vai trò và trách nhiệm ban đầu.",
    },
    // {
    //   year: "2024",
    //   title: "Major Milestones",
    //   description: "Reached 1000+ successful project deliveries",
    // },
    // {
    //   year: "2023",
    //   title: "Innovation Hub",
    //   description: "Launched our innovation lab for R&D",
    // },
    // {
    //   year: "2022",
    //   title: "Company Founded",
    //   description: "Started with a team of 5 passionate developers",
    // },
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Handle PDF controls
  const handleZoomIn = (side) => {
    setPdfStates((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        scale: Math.min(prev[side].scale + 0.2, 2.5),
      },
    }))
  }

  const handleZoomOut = (side) => {
    setPdfStates((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        scale: Math.max(prev[side].scale - 0.2, 0.5),
      },
    }))
  }

  const handlePrevPage = (side) => {
    setPdfStates((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        currentPage: Math.max(prev[side].currentPage - 1, 1),
      },
    }))
  }

  const handleNextPage = (side) => {
    setPdfStates((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        currentPage: Math.min(prev[side].currentPage + 1, prev[side].numPages || 1),
      },
    }))
  }

  const handlePdfError = (side) => {
    setPdfStates((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        failed: true,
      },
    }))
  }

  // PDF Viewer Component
  const PdfViewer = ({ side, title }) => {
    const pdfState = pdfStates[side]
    const pdfUrl = selectedEvent ? pdfUrls[selectedEvent][side] : ""

    return (
      <div className="flex-1 min-w-0 mb-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        {/* PDF Viewer Controls */}
        <div className="bg-gray-100 p-3 rounded-t-lg flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePrevPage(side)}
              disabled={pdfState.currentPage <= 1}
              className="bg-white h-9 w-9 p-0"
            >
              <ArrowLeft size={16} />
              <span className="sr-only">Previous page</span>
            </Button>

            <span className="text-xs">
              Page {pdfState.currentPage} of {pdfState.numPages || "?"}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNextPage(side)}
              disabled={pdfState.currentPage >= (pdfState.numPages || 1)}
              className="bg-white h-9 w-9 p-0"
            >
              <ArrowRight size={16} />
              <span className="sr-only">Next page</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => handleZoomOut(side)} className="bg-white h-9 w-9 p-0">
              <ZoomOut size={16} />
              <span className="sr-only">Zoom out</span>
            </Button>

            <span className="text-xs w-12 text-center">{Math.round(pdfState.scale * 100)}%</span>

            <Button variant="outline" size="sm" onClick={() => handleZoomIn(side)} className="bg-white h-9 w-9 p-0">
              <ZoomIn size={16} />
              <span className="sr-only">Zoom in</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="bg-white h-9 px-3"
              onClick={() => window.open(pdfUrl, "_blank")}
            >
              <Download size={16} className="mr-1" />
              <span className="text-xs">Download</span>
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="border border-gray-300 rounded-b-lg bg-gray-50 flex justify-center overflow-hidden">
          {!pdfState.failed ? (
            <div className="relative w-full h-full flex justify-center">
              <object
                data={`${pdfUrl}#page=${pdfState.currentPage}&view=FitH`}
                type="application/pdf"
                className="w-full h-full"
                style={{
                  height: "600px",
                  transform: `scale(${pdfState.scale})`,
                  transformOrigin: "center top",
                }}
                onError={() => handlePdfError(side)}
              >
                <embed
                  src={`${pdfUrl}#page=${pdfState.currentPage}&view=FitH`}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{
                    height: "600px",
                    transform: `scale(${pdfState.scale})`,
                    transformOrigin: "center top",
                  }}
                />
              </object>
            </div>
          ) : (
            // Fallback if PDF fails to load
            <div className="w-full flex flex-col items-center p-6 text-center" style={{ height: "400px" }}>
              <FileText size={48} className="mx-auto mb-4 text-purple-500" />
              <h3 className="text-lg font-semibold mb-2">Unable to Display PDF</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                We're having trouble displaying this PDF in your browser. You can still access the document using one of
                the options below:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => window.open(pdfUrl, "_blank")}
                  className="[background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)]"
                >
                  <FileText size={16} className="mr-2" />
                  Open in New Tab
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = pdfUrl
                    link.download = `document-${side}.pdf`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Find the selected event object
  const eventDetails = timelineEvents.find((event) => event.year === selectedEvent)

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-12">Lộ trình Dự án</h1>

      {/* Mobile View: Show PDFs directly when an event is selected */}
      {isMobile && selectedEvent && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)} className="mr-2 h-8 w-8 p-0">
                <ArrowLeft size={18} />
                <span className="sr-only">Back</span>
              </Button>
              Documents from {selectedEvent}
            </h2>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
            <span className="text-purple-500 font-bold text-xl mb-1 block">{eventDetails?.year}</span>
            <h3 className="text-xl font-semibold mb-2">{eventDetails?.title}</h3>
            <p className="text-gray-600 mb-4">{eventDetails?.description}</p>
          </div>

          <PdfViewer side="left" title="Biên bản" />
          <PdfViewer side="right" title="Phân công" />

          {/* Mobile PDF Viewing Tips */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <h3 className="font-semibold mb-1">Viewing Tips:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rotate your device to landscape for a better view</li>
              <li>Use the controls above to navigate between pages</li>
              <li>If the PDF doesn't display properly, try the download option</li>
            </ul>
          </div>
        </div>
      )}

      {/* Hide timeline on mobile when PDFs are shown */}
      {!(isMobile && selectedEvent) && (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 mt-2"></div>

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedEvent(event.year)}
                  >
                    <span className="text-purple-500 font-bold text-xl mb-2 block">{event.year}</span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="mt-4 text-purple-600 font-medium">Click để xem tài liệu</div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop: PDF Viewer Modal */}
      {!isMobile && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Documents from {selectedEvent}</h2>
              <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)} className="h-9 w-9 p-0">
                <X size={20} />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="p-6">
              <div className="flex flex-row space-x-6">
                <PdfViewer side="left" title="Biên bản" />
                <PdfViewer side="right" title="Phân công" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

