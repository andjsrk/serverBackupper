# ServerHub

ServerHub는 디스코드 서버를 백업, 로드할 수 있는 디스코드 봇입니다.

# 사용 시 주의사항

## 1. 사용 방법

`/저장` 명령어로 정보를 저장한 뒤 id를 부여합니다.
 * `/저장` 명령어는 서버의 오너만 사용할 수 있습니다.
 * **부여받은 id의 보관의 책임은 모두 사용자에게 있습니다.**

`/로드 <id>` 명령어로 저장된 정보를 불러옵니다.
 * **이때, 명령어를 사용하는 유저는 `/저장` 명령어를 입력했던 사람이며, `/로드` 명령어를 사용하는 서버의 오너여야 합니다.**

## 2. 저장 내용

위 봇은 다음과 같은 정보를 저장합니다. (아래 내용은 업데이트될 수 있습니다.)
 * 서버 아이콘 URL
 * 서버 지역
 * 비활성화(잠수) 채널
 * 비활성화(잠수) 시간
 * 시스템 메시지 채널
   * 환영 메시지 여부
   * 부스트 메시지 여부
 * 알림 설정
 * 역할
   * 이름
   * 색
   * 위치
   * 권한
   * 온라인 멤버와 분리 여부
   * 외부 시스템에 의한 관리 여부
   * 멘션 가능 여부
 * 이모티콘
   * 이름(id)
   * 이모티콘 URL
 * 카테고리
   * 이름
   * 위치
   * 채널
     * 이름
     * 위치
     * 권한 (봇 등의 일부 역할, 특정 유저 전용 권한 제외)
     * 주제 (텍스트 채널만 해당)
 * 채널
   * 이름
   * 위치
   * 권한 (봇 등의 일부 역할, 특정 유저 전용 권한 제외)
   * 주제 (텍스트 채널만 해당)
