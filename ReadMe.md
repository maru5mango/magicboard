## MagicBoard

-   figma, framer 처럼 작업 후 html, css, js로 export 할 수 있는 웹

### Tasks

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
