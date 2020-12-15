# Visiting Card Maker App (React.js)

![image](https://user-images.githubusercontent.com/56675004/102174630-4a4c2500-3ee1-11eb-8b9c-fa006bcae697.png)

![image](https://user-images.githubusercontent.com/56675004/102174573-2852a280-3ee1-11eb-80ab-5906cb8f5661.png)

---

#### 📌

```
- React.js
- html-to-image
- downloadjs
- Firebase (auth, database)
- Cloudinary (image upload)
```

---

## 링크

- [https://visiting-card-maker.netlify.app/maker](https://visiting-card-maker.netlify.app/maker)

---

## 설명

### [로그인 및 로그아웃 기능]

- 로그인을 해야만 Maker 페이지로 갈 수 있습니다.
- firebase auth API를 이용하여 로그인 기능을 구현하였습니다.
- 로그아웃은 로그인 후 우측 상단 자물쇠 모양 아이콘을 클릭하면 됩니다.

```
- Google
- Facebook
- Github
```

### [카드 추가]

- 왼쪽 Card Edit에서 카드를 생성할 수 있습니다.
- form을 모두 작성하고 Add버튼을 누르면 Card Preview에 카드가 생성됩니다.
- 이미지 업로드 기능을 넣었습니다.

```
- 이름, 회사, 제목, 이메일, 내용, 테마, 이미지를 넣을 수 있습니다.
- 이미지 업로드는 Cloudinary API를 이용하였습니다
```

### [카드 편집]

- 왼쪽 Card Edit에서 카드를 편집할 수 있습니다.
- form들을 수정하면 Card Preview에 있는 카드들이 실시간으로 수정됩니다.

```
- 이름, 회사, 제목, 이메일, 내용, 테마, 이미지 편집기능
- 이미지도 다시 업로드하면 새로운 이미지로 변환됩니다.
```

### [다운로드 기능]

- Download 버튼을 클릭하면 Card Preview에 있는 카드가 이미지로 변환되어 다운로드됩니다.

```
- html-to-image 라이브러리로 해당하는 카드의 Element를 image로 변환시켜줬습니다
- downloadjs를 이용하여 변환된 image를 다운로드되도록 만들었습니다.
- 해당하는 DOM에 직접적으로 접근하지 않고, useRef를 배열화로 응용하였습니다.
```

### [데이터베이스 연동]

- Firebase database API를 이용하여 해당하는 계정의 정보를 받아와서 보여줍니다.

```
- 로그인이 되면 userId를 실시간 데이터베이스에서 받아와 setCard를 해줍니다.
- 데이터베이스에 저장되어있던 정보들이 그대로 카드로 나열됩니다.
```

### [기타]

- 페이지 전환은 React-Router를 이용하였습니다.
- 컴포넌트 스타일링은 css-module을 이용하였습니다.
- 반응형은 기본적인 부분만 추가하였습니다.
