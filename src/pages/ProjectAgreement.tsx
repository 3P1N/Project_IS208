"use client"

import { ArrowLeft, ArrowRight, Download, FileText, ZoomIn, ZoomOut } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "../components/ui/button"

export const ProjectAgreementPage = () => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)
  const [numPages, setNumPages] = useState(null)
  const [scale, setScale] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [pdfFailed, setPdfFailed] = useState(false)

  // Sample PDF URL - replace with your actual PDF
  const pdfUrl = "/Project_IS208/HopDong.pdf"

  // Check if device is mobile for UI adjustments
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

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.5))
  }

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5))
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages || 1))
  }

  // Handle PDF load error
  const handlePdfError = () => {
    setPdfFailed(true)
  }

  return (
    <div className="px-4 md:px-[148px] py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Hợp đồng dự án</h1>
        <p className="text-gray-600 mb-6 md:mb-8">
        Tài liệu này trình bày các điều khoản và điều kiện cho sự hợp tác dự án của chúng tôi. Vui lòng xem xét kỹ thỏa thuận trước khi tiến hành bất kỳ dự án nào.
        </p>

        {/* PDF Viewer Controls - Responsive Layout */}
        <div className="bg-gray-100 p-3 md:p-4 rounded-t-lg flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className="bg-white h-10 w-10 md:h-9 md:w-9 p-0"
            >
              <ArrowLeft size={isMobile ? 20 : 16} />
              <span className="sr-only">Trang trước</span>
            </Button>

            <span className="text-sm md:text-xs">
              Page {currentPage} of {numPages || "?"}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage >= (numPages || 1)}
              className="bg-white h-10 w-10 md:h-9 md:w-9 p-0"
            >
              <ArrowRight size={isMobile ? 20 : 16} />
              <span className="sr-only">Trang sau</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="bg-white h-10 w-10 md:h-9 md:w-9 p-0"
            >
              <ZoomOut size={isMobile ? 20 : 16} />
              <span className="sr-only">Thu nhỏ</span>
            </Button>

            <span className="text-sm md:text-xs w-12 text-center">{Math.round(scale * 100)}%</span>

            <Button variant="outline" size="sm" onClick={handleZoomIn} className="bg-white h-10 w-10 md:h-9 md:w-9 p-0">
              <ZoomIn size={isMobile ? 20 : 16} />
              <span className="sr-only">Phóng to</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="bg-white ml-1 h-10 md:h-9 px-3"
              onClick={() => window.open(pdfUrl, "_blank")}
            >
              <Download size={isMobile ? 20 : 16} className="mr-1" />
              <span className="text-sm md:text-xs">Tải xuống</span>
            </Button>
          </div>
        </div>

        {/* PDF Viewer - Works on both Mobile and Desktop */}
        <div className="border border-gray-300 rounded-b-lg bg-gray-50 flex justify-center overflow-hidden">
          {!pdfFailed ? (
            <div className="relative w-full h-full flex justify-center">
              <object
                data={`${pdfUrl}#page=${currentPage}&view=FitH`}
                type="application/pdf"
                className="w-full h-full"
                style={{
                  minHeight: isMobile ? "500px" : "800px",
                  transform: `scale(${scale})`,
                  transformOrigin: "center top",
                }}
                onError={handlePdfError}
              >
                <embed
                  src={`${pdfUrl}#page=${currentPage}&view=FitH`}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{
                    minHeight: isMobile ? "500px" : "800px",
                    transform: `scale(${scale})`,
                    transformOrigin: "center top",
                  }}
                />
              </object>
            </div>
          ) : (
            // Fallback if PDF fails to load
            <div className="w-full flex flex-col items-center p-6 text-center">
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
                  Mở trong thẻ mới
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = pdfUrl
                    link.download = "project-agreement.pdf"
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

        {/* Mobile PDF Viewing Tips */}
        {isMobile && !pdfFailed && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <h3 className="font-semibold mb-1">Viewing Tips:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pinch to zoom for better readability</li>
              <li>Rotate your device to landscape for a larger view</li>
              <li>Use the controls above to navigate between pages</li>
              <li>If the PDF doesn't display properly, try the download option</li>
            </ul>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Thông tin hợp đồng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Document Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Document Type:</span> Project Agreement
                </li>
                <li>
                  <span className="font-medium">Version:</span> 2.1
                </li>
                <li>
                  <span className="font-medium">Last Updated:</span> March 15, 2025
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Nếu bạn có bất kỳ câu hỏi nào về thỏa thuận này, vui lòng liên hệ với đội ngũ pháp lý của chúng tôi tại:
              </p>
              <a href="mailto:23521175@gm.uit.edu.vn" className="text-purple-600 hover:text-purple-800 transition-colors">
              23521175@gm.uit.edu.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

