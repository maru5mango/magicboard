## 🎨 MagicBoard

-   figma, framer 처럼 작업 후 html, css, js로 export 할 수 있는 웹   

```
1. layout
  html 태그 네모박스로 그리기
  현재 트리 구조 보기

2. editor  
  1) assets 입력
  2) assets 간단한 편집
  3) layout 꾸미기

3. animation
  1) css animation
  2) js

4. preview
  1) 핸드폰, 테블릿, 웹 모니터 등 preview

5. homepageDocs 작성
  1) meta 태그
  2) favicon
  3) 홈페이지 제목

6. export
```


<br />

## 📅 일정
### 1. layout_2주
  1) html 태그 네모박스로 그리기
  2) 현재 트리 구조 보기

### 2. editor_4주
  1) assets 입력
  2) assets 간단한 편집
  3) layout 꾸미기

### 3. editor_6주
  1) assets 입력
  2) assets 간단한 편집
  3) layout 꾸미기

### 4. animation_8주 
  1) css animation
  2) js

### 5. preview_10주
  1) 핸드폰, 테블릿, 웹 모니터 등 preview

### 6. homepageDocs&export_12주
  1) meta 태그
  2) favicon
  3) 홈페이지 제목
  4) export

### 7. UI 적용_14주

<br />

## 📌 Tasks
-   [ ] 그림판
-   [ ] 이미지 편집
-   [ ] image, video, font등 업로드
-   [ ] html dom 만들기
-   [ ] 반응형 미리보기
-   [ ] 임시 저장

#### More
-   [ ] 로그인
-   [ ] 내 저장소
-   [ ] 즐겨찾기
-   [ ] google docs처럼 함께 작업, comment 달기
-   [ ] 만든 내용 공유하는 게시판


<br />

## 📚 폴더 구조

```
- src
    - assets
    - const
    - routes
    - main
```

#### assets

-   icon, photo, font 등 assets 파일

#### const

-   config, types interface 등

#### routes

-   route 가장 상위 page 파일

#### main

-   UI/Data 등 component로 관리
-   main 폴더 구조

```
- main
    - middleware
        - redux, hoc등
    - ui
        - component, styles, layouts 등 ui 관련 모듈
    - service
        - API/ hooks과 같이 서비스 비즈니스 로직을 담당하는 부분
    - utils
        - 자주 사용하는 작은 함수 단위 모음
```
