<?php include 'header.php'; ?>
<main>
  <section class="contact">
    <div class="top_banner">
      <div class="text_box">
        <img src="img/top_banner.png" alt="" />
        <div>
          <h2>문의하기</h2>
          <p>궁금한 사항은 직접 문의하세요!</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <h2 class="title blin">CONTACT</h2>
      <form name="frm" action="">
        <div class="block">
          <label for="form_name">이름 <b>*</b></label>
          <input type="text" name="form_name" id="form_name" placeholder="이름을 입력하세요." />
        </div>
        <div class="block">
          <label for="form_email">이메일 <b>*</b></label>
          <input type="text" name="form_email" id="form_email" placeholder="이메일을 입력하세요." />
        </div>
        <div class="block">
          <label for="form_title">제목 <b>*</b></label>
          <input type="text" name="form_title" id="form_title" placeholder="제목을 입력하세요." />
        </div>
        <div class="block">
          <label for="form_contents">내용 <b>*</b></label>
          <textarea
            name="form_contents"
            id="form_contents"
            cols="30"
            rows="10"
            placeholder="문의 내용을 입력하세요."
          ></textarea>
        </div>
        <input type="button" onclick="return checkForm();" name="formSubmit" id="formSubmit" value="문의하기" />
      </form>
    </div>
  </section>
  <script>
    //contact 유효성검사
    function checkForm() {
      let name = $('#form_name');
      let email = $('#form_email');
      let title = $('#form_title');
      let contents = $('#form_contents');
      let regex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;

      if (name.val() == '') {
        alert('이름을 입력하세요.');
        name.focus();
        return false;
      } else if (name.val().length <= 1) {
        alert('최소 2자 이상 입력하세요.');
        name.focus();
        return false;
      }
      if (email.val() == '') {
        alert('이메일을 입력하세요.');
        email.focus();
        return false;
      } else if (regex.test(email.val()) == false) {
        alert('이메일 형식이 아닙니다.');
        email.focus();
        return false;
      }
      if (title.val() == '') {
        title.focus();
        alert('제목을 입력하세요.');
        return false;
      }
      if (contents.val() == '') {
        contents.focus();
        alert('내용을 입력하세요.');
        return false;
      }
    }
  </script>
</main>
<?php include 'footer.php'; ?>
