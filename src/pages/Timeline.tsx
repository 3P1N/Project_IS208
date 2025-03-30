"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, CheckCircle, Download, FileText, Link2, List, X } from "lucide-react"
import { Button } from "../components/ui/button"

export const TimelinePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Enhanced timeline events with only DOCX files
  const timelineEvents = [
    {
      year: "17-03-2025",
      title: "Khởi động dự án",
      description: "Đội ngũ dự án đã được phân công vai trò và trách nhiệm ban đầu.",
      detailedDescription:
        "Khởi động dự án (17-03-2025)",
      todoList: [
        "Họp bắt đầu dự án",
        "Phân công công việc",
        "Nghiên cứu, tham khảo các nguồn tài liệu",
        "Thảo luận, hình thành ý tưởng cho dự án",
        "Xây dựng SOW, Project Charter",
        "Định hướng dự án",
        "Xác định các công nghệ, môi trường sử dụng",
      ],
      files: [
        { name: "Biên bản họp nhóm", type: "pdf", url: "/Project_IS208/BienBan1.pdf" },
        { name: "Phân công thành viên", type: "pdf", url: "/Project_IS208/PhanCong1.pdf" },
        { name: "SOW", type: "pdf", url: "/Project_IS208/SOW.pdf" },
        { name: "Project Charter", type: "pdf", url: "/Project_IS208/Project_Charter.pdf" },
        { name: "Bảng câu hỏi phỏng vấn khảo sát hiện trạng", type: "pdf", url: "/Project_IS208/Phong_Van.pdf" },
        { name: "Project Business Case", type: "pdf", url: "/Project_IS208/Project_Business_Case.pdf" },
      ],
    },
    // {
    //   year: "2024",
    //   title: "Major Milestones",
    //   description: "Reached 1000+ successful project deliveries",
    //   detailedDescription:
    //     "This year marks a tremendous achievement for our company as we surpassed 1,000 successful project deliveries. This milestone reflects our team's dedication to excellence, our robust project management methodologies, and our unwavering commitment to client satisfaction. Each project represents a unique challenge overcome and a valuable relationship built with our clients across various industries.",
    //   todoList: [
    //     "Compile case studies from landmark projects",
    //     "Organize client appreciation events",
    //     "Refine project delivery methodology based on learnings",
    //     "Implement advanced project analytics dashboard",
    //     "Launch referral program for existing clients",
    //   ],
    //   files: [
    //     { name: "Project Success Metrics", type: "docx", url: "#" },
    //     { name: "Client Testimonials Compilation", type: "docx", url: "#" },
    //     { name: "Delivery Process Improvements", type: "docx", url: "#" },
    //     { name: "Team Recognition Program", type: "docx", url: "#" },
    //   ],
    // },
    // {
    //   year: "2023",
    //   title: "Innovation Hub",
    //   description: "Launched our innovation lab for R&D",
    //   detailedDescription:
    //     "The launch of our Innovation Hub represents our commitment to staying at the forefront of technology. This dedicated research and development center serves as an incubator for cutting-edge ideas, experimental projects, and technological exploration. By investing in innovation, we're not just preparing for the future—we're actively shaping it. The hub enables our talented team members to explore emerging technologies, develop proofs of concept, and transform innovative ideas into practical solutions for our clients.",
    //   todoList: [
    //     "Establish innovation governance framework",
    //     "Recruit specialized R&D talent",
    //     "Set up dedicated innovation budget",
    //     "Create internal innovation challenge program",
    //     "Develop partnerships with universities and research institutions",
    //   ],
    //   files: [
    //     { name: "Innovation Hub Charter", type: "docx", url: "#" },
    //     { name: "Research Focus Areas", type: "docx", url: "#" },
    //     { name: "Emerging Technology Assessment", type: "docx", url: "#" },
    //     { name: "Innovation Process Flowchart", type: "docx", url: "#" },
    //   ],
    // },
    // {
    //   year: "2022",
    //   title: "Company Founded",
    //   description: "Started with a team of 5 passionate developers",
    //   detailedDescription:
    //     "Our journey began in 2022 with just five passionate developers sharing a vision to create impactful digital solutions. Working from a small office space, our founding team combined their expertise in various technologies to tackle challenging projects for our first clients. Despite limited resources, our commitment to quality and innovation quickly established our reputation in the industry. These humble beginnings laid the foundation for our company culture—one that values creativity, collaboration, and continuous learning.",
    //   todoList: [
    //     "Develop company vision and mission statements",
    //     "Create initial service offerings",
    //     "Build company website and brand identity",
    //     "Establish core development processes",
    //     "Secure first major client contracts",
    //   ],
    //   files: [
    //     { name: "Founding Documents", type: "docx", url: "#" },
    //     { name: "Original Business Plan", type: "docx", url: "#" },
    //     { name: "First Client Project Proposal", type: "docx", url: "#" },
    //     { name: "Company Launch Presentation", type: "docx", url: "#" },
    //   ],
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

  // Find the selected event object
  const eventDetails = timelineEvents.find((event) => event.year === selectedEvent)

  // Event Detail View Component
  const EventDetailView = ({ event }) => {
    if (!event) return null

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header with year and title */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <Calendar className="text-white mr-2" size={20} />
                <span className="text-white font-bold">{event.year}</span>
              </div>
              <h2 className="text-white text-2xl font-bold mt-1">{event.title}</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedEvent(null)}
              className="h-9 w-9 p-0 text-white hover:bg-white/20"
            >
              {isMobile ? <ArrowLeft size={20} /> : <X size={20} />}
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Description Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Description</h3>
            <p className="text-gray-600 leading-relaxed">{event.detailedDescription}</p>
          </section>

          {/* To-Do List Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <List className="mr-2 text-purple-500" size={20} />
              To-Do List
            </h3>
            <ul className="space-y-2">
              {event.todoList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Files Section */}
          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <Link2 className="mr-2 text-purple-500" size={20} />
              Word Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {event.files.map((file, index) => (
                <a
                  key={index}
                  href={file.url}
                  className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="text-blue-500" size={18} />
                  <span className="ml-2 text-gray-700 group-hover:text-purple-600">{file.name}</span>
                  <Download className="ml-auto text-gray-400 group-hover:text-purple-600" size={16} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-12">Lộ trình Dự án</h1>

      {/* Mobile View: Show event details directly when an event is selected */}
      {isMobile && selectedEvent && (
        <div className="mb-8">
          <EventDetailView event={eventDetails} />
        </div>
      )}

      {/* Hide timeline on mobile when event details are shown */}
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
                    <div className="mt-4 text-purple-600 font-medium flex items-center">
                      <FileText size={16} className="mr-1" />
                      Click to view details
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop: Event Details Modal */}
      {!isMobile && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            <EventDetailView event={eventDetails} />
          </div>
        </div>
      )}
    </div>
  )
}

