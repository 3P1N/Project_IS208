import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.aboutUs": "About Us",
      "nav.project": "Project",
      "nav.timeline": "Timeline",
      "nav.contactUs": "Contact us",
      "nav.projectAgreement": "Project Agreement",

      // Hero Section
      "hero.title1": "Great",
      "hero.title2": "Product",
      "hero.title3": "is",
      "hero.title4": "built by great",
      "hero.title5": "teams",
      "hero.description": "We help build and manage a team of world-class developers to bring your vision to life",

      // About Page
      "about.title": "About Us",
      "about.mission.title": "Our Mission",
      "about.mission.description":
        "We are dedicated to delivering exceptional software solutions that empower businesses to thrive in the digital age. Our team of expert developers works tirelessly to transform your ideas into reality.",
      "about.vision.title": "Our Vision",
      "about.vision.description":
        "To be the leading software development company that sets industry standards for innovation, quality, and customer satisfaction. We strive to create technology solutions that make a positive impact on businesses and society.",
      "about.expertTeam.title": "Expert Team",
      "about.expertTeam.description":
        "Our team consists of highly skilled professionals with diverse expertise in various technologies and domains.",
      "about.qualityFirst.title": "Quality First",
      "about.qualityFirst.description":
        "We maintain the highest standards of quality in every project we undertake, ensuring robust and scalable solutions.",
      "about.innovation.title": "Innovation",
      "about.innovation.description":
        "We stay at the forefront of technology, constantly exploring new ways to solve complex problems.",
      "about.team.title": "Our Team",
      "about.team.description":
        "Meet our talented team of professionals who work tirelessly to bring your ideas to life. Each member brings unique expertise and passion to deliver exceptional results.",
      "about.values.title": "Our Values",
      "about.collaboration.title": "Collaboration",
      "about.collaboration.description":
        "We believe in the power of teamwork and open communication to achieve exceptional results.",
      "about.expertise.title": "Expertise:",

      // Project Page
      "project.title": "Featured Project",
      "project.featuredProject.title": "E-Commerce Platform",
      "project.featuredProject.description":
        "A comprehensive online shopping solution designed for modern businesses. This platform offers a seamless shopping experience with advanced features including product management, secure payment processing, inventory tracking, and customer analytics.",
      "project.featuredProject.longDescription":
        "Our E-Commerce Platform is built with scalability and performance in mind. It handles high traffic volumes while maintaining fast load times and responsive design across all devices. The admin dashboard provides powerful tools for business owners to manage their online presence effectively.",
      "project.keyFeatures": "Key Features",
      "project.features.responsive": "Responsive design for all devices",
      "project.features.payment": "Secure payment gateway integration",
      "project.features.inventory": "Real-time inventory management",
      "project.features.search": "Advanced search and filtering",
      "project.features.account": "Customer account management",
      "project.features.analytics": "Analytics and reporting dashboard",
      "project.timeline": "Project Timeline",
      "project.client": "Client",
      "project.technologies": "Technologies Used",
      "project.cta.interested": "Interested in a similar solution for your business?",
      "project.cta.button": "Contact Us About This Project",
      "project.warehouse.title": "Warehouse Management Application",

      // Timeline Page
      "timeline.title": "Our Journey",
      "timeline.2025.title": "Global Expansion",
      "timeline.2025.description": "Opening new offices in Europe and Asia",
      "timeline.2024.title": "Major Milestones",
      "timeline.2024.description": "Reached 1000+ successful project deliveries",
      "timeline.2023.title": "Innovation Hub",
      "timeline.2023.description": "Launched our innovation lab for R&D",
      "timeline.2022.title": "Company Founded",
      "timeline.2022.description": "Started with a team of 5 passionate developers",
      "timeline.initialAssignment.title": "Initial Assignment",
      "timeline.initialAssignment.description":
        "The project team was assigned their initial roles and responsibilities.",

      // Contact Page
      "contact.title": "Contact Our Team",
      "contact.description":
        "Have questions or want to discuss a project? Reach out directly to our team members below. We're always happy to help and will respond to your inquiry as soon as possible.",
      "contact.companyInfo": "Company Information",
      "contact.needHelp": "Need Help?",
      "contact.legalContact": "If you have any questions about this agreement, please contact our legal team at:",

      // Project Agreement Page
      "agreement.title": "Project Agreement",
      "agreement.description":
        "This document outlines the terms and conditions for our project collaboration. Please review the agreement carefully before proceeding with any project.",
      "agreement.viewingTips": "Viewing Tips:",
      "agreement.tips.pinch": "Pinch to zoom for better readability",
      "agreement.tips.rotate": "Rotate your device to landscape for a larger view",
      "agreement.tips.controls": "Use the controls above to navigate between pages",
      "agreement.tips.download": "If the PDF doesn't display properly, try the download option",
      "agreement.info.title": "Agreement Information",
      "agreement.info.documentDetails": "Document Details",
      "agreement.info.documentType": "Document Type:",
      "agreement.info.version": "Version:",
      "agreement.info.lastUpdated": "Last Updated:",
      "agreement.download": "Download",
      "agreement.page": "Page",
      "agreement.of": "of",
      "agreement.pdfError.title": "Unable to Display PDF",
      "agreement.pdfError.description":
        "We're having trouble displaying this PDF in your browser. You can still access the document using one of the options below:",
      "agreement.openInNewTab": "Open in New Tab",
      "agreement.downloadPdf": "Download PDF",
      "agreement.zoomIn": "Zoom in",
      "agreement.zoomOut": "Zoom out",

      // Footer
      "footer.companyDesc": "Building world-class development teams for your digital success.",
      "footer.quickLinks": "Quick Links",
      "footer.services": "Services",
      "footer.webDev": "Web Development",
      "footer.mobileDev": "Mobile Development",
      "footer.cloudSolutions": "Cloud Solutions",
      "footer.devOps": "DevOps",
      "footer.contactUs": "Contact Us",
      "footer.email": "Email: contact@pmit.com",
      "footer.phone": "Phone: +1 (555) 123-4567",
      "footer.address": "Address: 123 Tech Street, Digital City, 12345",
      "footer.copyright": "© 2025 PMIT. All rights reserved.",

      // Language Switcher
      "language.english": "English",
      "language.vietnamese": "Tiếng Việt",
    },
  },
  vi: {
    translation: {
      // Navigation
      "nav.home": "Trang chủ",
      "nav.aboutUs": "Về chúng tôi",
      "nav.project": "Dự án",
      "nav.timeline": "Tiến độ",
      "nav.contactUs": "Liên hệ",
      "nav.projectAgreement": "Thỏa thuận dự án",

      // Hero Section
      "hero.title1": "Sản phẩm",
      "hero.title2": "Tuyệt vời",
      "hero.title3": "được",
      "hero.title4": "xây dựng bởi",
      "hero.title5": "đội ngũ xuất sắc",
      "hero.description":
        "Chúng tôi giúp xây dựng và quản lý đội ngũ phát triển đẳng cấp thế giới để hiện thực hóa tầm nhìn của bạn",

      // About Page
      "about.title": "Về chúng tôi",
      "about.mission.title": "Sứ mệnh của chúng tôi",
      "about.mission.description":
        "Chúng tôi cam kết cung cấp các giải pháp phần mềm xuất sắc giúp doanh nghiệp phát triển trong kỷ nguyên số. Đội ngũ phát triển chuyên nghiệp của chúng tôi làm việc không mệt mỏi để biến ý tưởng của bạn thành hiện thực.",
      "about.vision.title": "Tầm nhìn của chúng tôi",
      "about.vision.description":
        "Trở thành công ty phát triển phần mềm hàng đầu thiết lập tiêu chuẩn ngành về đổi mới, chất lượng và sự hài lòng của khách hàng. Chúng tôi nỗ lực tạo ra các giải pháp công nghệ tạo tác động tích cực đến doanh nghiệp và xã hội.",
      "about.expertTeam.title": "Đội ngũ chuyên gia",
      "about.expertTeam.description":
        "Đội ngũ của chúng tôi bao gồm các chuyên gia có kỹ năng cao với chuyên môn đa dạng trong nhiều công nghệ và lĩnh vực khác nhau.",
      "about.qualityFirst.title": "Chất lượng là hàng đầu",
      "about.qualityFirst.description":
        "Chúng tôi duy trì tiêu chuẩn chất lượng cao nhất trong mọi dự án, đảm bảo các giải pháp mạnh mẽ và có khả năng mở rộng.",
      "about.innovation.title": "Đổi mới",
      "about.innovation.description":
        "Chúng tôi luôn đi đầu trong công nghệ, không ngừng tìm kiếm cách mới để giải quyết các vấn đề phức tạp.",
      "about.team.title": "Đội ngũ của chúng tôi",
      "about.team.description":
        "Gặp gỡ đội ngũ tài năng của chúng tôi, những người làm việc không mệt mỏi để biến ý tưởng của bạn thành hiện thực. Mỗi thành viên mang đến chuyên môn và niềm đam mê độc đáo để mang lại kết quả xuất sắc.",
      "about.values.title": "Giá trị của chúng tôi",
      "about.collaboration.title": "Hợp tác",
      "about.collaboration.description":
        "Chúng tôi tin vào sức mạnh của làm việc nhóm và giao tiếp cởi mở để đạt được kết quả xuất sắc.",
      "about.expertise.title": "Chuyên môn:",

      // Project Page
      "project.title": "Dự án nổi bật",
      "project.featuredProject.title": "Nền tảng thương mại điện tử",
      "project.featuredProject.description":
        "Một giải pháp mua sắm trực tuyến toàn diện được thiết kế cho các doanh nghiệp hiện đại. Nền tảng này cung cấp trải nghiệm mua sắm liền mạch với các tính năng nâng cao bao gồm quản lý sản phẩm, xử lý thanh toán an toàn, theo dõi hàng tồn kho và phân tích khách hàng.",
      "project.featuredProject.longDescription":
        "Nền tảng thương mại điện tử của chúng tôi được xây dựng với khả năng mở rộng và hiệu suất. Nó xử lý lưu lượng truy cập cao trong khi duy trì thời gian tải nhanh và thiết kế đáp ứng trên tất cả các thiết bị. Bảng điều khiển quản trị cung cấp công cụ mạnh mẽ cho chủ doanh nghiệp để quản lý hiệu quả sự hiện diện trực tuyến của họ.",
      "project.keyFeatures": "Tính năng chính",
      "project.features.responsive": "Thiết kế đáp ứng cho mọi thiết bị",
      "project.features.payment": "Tích hợp cổng thanh toán an toàn",
      "project.features.inventory": "Quản lý hàng tồn kho thời gian thực",
      "project.features.search": "Tìm kiếm và lọc nâng cao",
      "project.features.account": "Quản lý tài khoản khách hàng",
      "project.features.analytics": "Bảng điều khiển phân tích và báo cáo",
      "project.timeline": "Tiến độ dự án",
      "project.client": "Khách hàng",
      "project.technologies": "Công nghệ sử dụng",
      "project.cta.interested": "Bạn quan tâm đến một giải pháp tương tự cho doanh nghiệp của mình?",
      "project.cta.button": "Liên hệ với chúng tôi về dự án này",
      "project.warehouse.title": "Ứng dụng quản lý kho",

      // Timeline Page
      "timeline.title": "Hành trình của chúng tôi",
      "timeline.2025.title": "Mở rộng toàn cầu",
      "timeline.2025.description": "Mở văn phòng mới tại Châu Âu và Châu Á",
      "timeline.2024.title": "Cột mốc quan trọng",
      "timeline.2024.description": "Đạt hơn 1000 dự án thành công",
      "timeline.2023.title": "Trung tâm đổi mới",
      "timeline.2023.description": "Ra mắt phòng thí nghiệm đổi mới cho R&D",
      "timeline.2022.title": "Thành lập công ty",
      "timeline.2022.description": "Bắt đầu với đội ngũ 5 nhà phát triển đầy nhiệt huyết",
      "timeline.initialAssignment.title": "Phân công ban đầu",
      "timeline.initialAssignment.description": "Đội dự án được phân công vai trò và trách nhiệm ban đầu của họ.",

      // Contact Page
      "contact.title": "Liên hệ với đội ngũ của chúng tôi",
      "contact.description":
        "Bạn có câu hỏi hoặc muốn thảo luận về một dự án? Liên hệ trực tiếp với các thành viên trong đội ngũ của chúng tôi dưới đây. Chúng tôi luôn sẵn sàng giúp đỡ và sẽ phản hồi yêu cầu của bạn trong thời gian sớm nhất.",
      "contact.companyInfo": "Thông tin công ty",
      "contact.needHelp": "Cần trợ giúp?",
      "contact.legalContact":
        "Nếu bạn có bất kỳ câu hỏi nào về thỏa thuận này, vui lòng liên hệ với đội ngũ pháp lý của chúng tôi tại:",

      // Project Agreement Page
      "agreement.title": "Thỏa thuận dự án",
      "agreement.description":
        "Tài liệu này nêu rõ các điều khoản và điều kiện cho sự hợp tác dự án của chúng tôi. Vui lòng xem xét kỹ thỏa thuận trước khi tiến hành bất kỳ dự án nào.",
      "agreement.viewingTips": "Mẹo xem tài liệu:",
      "agreement.tips.pinch": "Chụm để phóng to để đọc tốt hơn",
      "agreement.tips.rotate": "Xoay thiết bị sang ngang để xem rộng hơn",
      "agreement.tips.controls": "Sử dụng các điều khiển ở trên để điều hướng giữa các trang",
      "agreement.tips.download": "Nếu PDF không hiển thị đúng, hãy thử tùy chọn tải xuống",
      "agreement.info.title": "Thông tin thỏa thuận",
      "agreement.info.documentDetails": "Chi tiết tài liệu",
      "agreement.info.documentType": "Loại tài liệu:",
      "agreement.info.version": "Phiên bản:",
      "agreement.info.lastUpdated": "Cập nhật lần cuối:",
      "agreement.download": "Tải xuống",
      "agreement.page": "Trang",
      "agreement.of": "của",
      "agreement.pdfError.title": "Không thể hiển thị PDF",
      "agreement.pdfError.description":
        "Chúng tôi đang gặp sự cố khi hiển thị PDF này trong trình duyệt của bạn. Bạn vẫn có thể truy cập tài liệu bằng một trong các tùy chọn bên dưới:",
      "agreement.openInNewTab": "Mở trong tab mới",
      "agreement.downloadPdf": "Tải xuống PDF",
      "agreement.zoomIn": "Phóng to",
      "agreement.zoomOut": "Thu nhỏ",

      // Footer
      "footer.companyDesc": "Xây dựng đội ngũ phát triển đẳng cấp thế giới cho sự thành công kỹ thuật số của bạn.",
      "footer.quickLinks": "Liên kết nhanh",
      "footer.services": "Dịch vụ",
      "footer.webDev": "Phát triển Web",
      "footer.mobileDev": "Phát triển Mobile",
      "footer.cloudSolutions": "Giải pháp Đám mây",
      "footer.devOps": "DevOps",
      "footer.contactUs": "Liên hệ",
      "footer.email": "Email: contact@pmit.com",
      "footer.phone": "Điện thoại: +1 (555) 123-4567",
      "footer.address": "Địa chỉ: 123 Tech Street, Digital City, 12345",
      "footer.copyright": "© 2025 PMIT. Đã đăng ký bản quyền.",

      // Language Switcher
      "language.english": "Tiếng Anh",
      "language.vietnamese": "Tiếng Việt",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

