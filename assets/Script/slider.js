

// Ngăn chặn nhảy trang khi tải
$(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
      $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
      $("section").show();
    }, 200);
  });
  
  // Code kích hoạt carousel được hiển thị 
  const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,   // Kích hoạt tự động chuyển slide
    autoplayTimeout: 5000,  // 1000 tương úng 1 giây
    nav: true,  // kích hoạt tùy chọn điều hướng 
    navText: [  //định nghĩa một số SVG tùy biến
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */]
  });
  
  
  // thêm hiệu ứng động vào mỗi slide
  $owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
  
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
  
    const $target = $currentOwlItem.find(".owl-slide-text");
    doDotsCalculations($target);
  });
  
  
  // Xử lý khi kích thước trình duyệt thay đổi
  $owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => {
      setOwlDotsPosition();
    }, 50);
  });
  
  /*nếu không có nội dung bên dưới băng chuyền*/
  $owlCarousel.trigger("refresh.owl.carousel");
  
  setOwlDotsPosition();
  
  // Thiết lập vị trí các chấm điều hướng
  function setOwlDotsPosition() {
    const $target = $(".owl-item.active .owl-slide-text");
    doDotsCalculations($target);
  }
  
  function doDotsCalculations(el) {
    const height = el.height();
    const { top, left } = el.position();
    const res = height + top + 20;
  
    $(".owl-carousel .owl-dots").css({
      top: `${res}px`,
      left: `${left}px`
    });
  
  }