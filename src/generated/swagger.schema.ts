/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FilterAuthRedirect {
  /** state */
  state: string;

  /** code */
  code: string;
}

export interface OldUserInfo {
  /** 이용자 이름 */
  mname?: string;

  /** 전화번호 */
  mtel_srt?: string;

  /** Email */
  memail?: string;

  /** 기본형 만료일 */
  endday?: string;

  /** 퀵형 만료일 */
  quick_endday?: string;

  /** 기본형 계좌수 */
  accea?: string;

  /** 퀵형 계좌수 */
  qaccea?: string;

  /** 회원테이블 등록여부 */
  exist?: string;

  /** 기본형 등록 계좌수 */
  regaccea?: string;

  /** 퀵형 등록 계좌수 */
  qregaccea?: string;
}

export interface NewUserInfo {
  /** 이용자 ID */
  mallId: string;

  /** 이용자유형 */
  memberRole: "P" | "A";

  /** 서비스유형 */
  memberType: "cafe24" | "cafe24pkg";
}

export interface ServiceChangeInfo {
  /** 현재 서비스 */
  from: "cafe24" | "cafe24pkg";

  /** 변경할 서비스 */
  to: "cafe24" | "cafe24pkg";

  /** 변경단계 (1:잔여기간 및 환불안내, 2:서비스변경 confirm) */
  step: 1 | 2;
}

export interface LoginResponse {
  /** 억세스토큰 */
  accessToken?: string;

  /** 리프레시토큰 */
  refreshToken?: string;

  /** 최초 전달된 stateId값 - 신규가입 및 전환가입시 함께 전달해 주어야 함 */
  state?: string;

  /** 예외코드 */
  exceptionCode?: 110 | 120 | 130 | 140;

  /** 예외메시지 */
  exceptionMessage?:
    | "서비스 만료 (억세스토큰 있음)"
    | "서비스 변경 (뱅크다M, 뱅크다M패키지 전환)"
    | "신규가입 (억세스토큰 없음)"
    | "구서비스 전환가입 (억세스토큰 없음)";
  oldUserInfo?: OldUserInfo & any;
  newUserInfo?: NewUserInfo & any;
  serviceChangeInfo?: ServiceChangeInfo & any;
}

export interface ExceptionResponse {
  /** HTTP Status Code */
  statusCode: number;

  /** 결과 메시지 */
  message: string;

  /** 에러 내용 */
  error: string;
}

export interface RefreshLoginRequest {
  /** 억세스토큰 */
  accessToken: string;

  /** 리프레시토큰 */
  refreshToken: string;
}

export interface Bank {
  /** 거래내역키 */
  id: number;

  /** 은행명 */
  name: string;

  /** 거래일자(YYYYMMDD) */
  date: number;

  /** 거래시간(HHMMSS) */
  time: string;

  /** 필터링적요 */
  jukyo: string;

  /** 내용 */
  description?: string;

  /** 비고 */
  etc?: string;

  /** 입금액 */
  input: number;

  /** 출금액 */
  output?: number;

  /** 잔액 */
  balance?: number;

  /** 수집일시 */
  collectedAt?: string;

  /** 메모란 */
  memo?: string;

  /** 매치대상제외(T:매치제외,F:매치포함) */
  exceptedMatch?: string;

  /** match 번호 */
  matchId?: number;

  /** 계좌번호 */
  accountNo: string;

  /** 계좌 순번 */
  accountId?: number;

  /** 매치상태 */
  matchFlag?: string;

  /** 자동,수동여부 */
  matchClass?: string;

  /** 매치형태(입금내역:주문내역) */
  matchVs?: string;
}

export interface PagingMeta {
  /** 현재페이지 목록수 */
  itemCount: number;

  /** 전체목록수 */
  totalItems: number;

  /** 페이지당 목록수 */
  itemsPerPage: number;

  /** 전체페이지 수 */
  totalPages: number;

  /** 현재페이지 번호 */
  currentPage: number;
}

export interface PagingLinks {
  /** 처음 페이지 링크 */
  first?: string;

  /** 이전 페이지 링크 */
  previous?: string;

  /** 다음 페이지 링크 */
  next?: string;

  /** 마지막 페이지 링크 */
  last?: string;
}

export interface BankPaging {
  /** 페이지목록 */
  items: Bank[];
  meta: PagingMeta & any;
  links: PagingLinks & any;
}

export interface BankBalanceView {
  /** 계좌의 순번 */
  accountId: number;

  /** 이름 */
  bankName: string;

  /** 잔액 */
  balance: number;

  /** 계좌의 별칭 */
  rename: string;
}

export interface SearchBankSummariesResponse {
  /** 계좌의 순번 */
  accountId: number;

  /** 계좌의 총 입금액 */
  totalInput?: number;

  /** 계좌의 총 출금액 */
  totalOutput?: number;

  /** 계좌의 별칭 */
  rename?: string;

  /** 은행명 */
  bankName: string;
}

export interface UpdateBankInput {
  /** (해당입출금 내역건 간단)메모 */
  memo: string;
}

export interface SaveBankMemoResponse {
  /** (업데이트한) 거래내역의 순번 */
  id: number;

  /** (업데이트한) 거래내역의 메모내용 */
  memo: string;
}

export interface UpdateBankMatchInputIds {
  /** 해당계좌의 순번 */
  accountId: number;

  /** 거래내역의 순번 */
  bankId: number;
}

export interface UpdateBankMatchInput {
  /** 계좌 및 거래내역의 순번목록 */
  ids: UpdateBankMatchInputIds[];

  /** 매치대상제외(T:매치제외,F:매치포함) */
  exceptedMatch: "F" | "T";
}

export interface SaveBanksExceptedMatchResponse {
  /** 계좌 및 거래내역의 순번목록 */
  ids: UpdateBankMatchInputIds[];

  /** 매치대상제외(T:매치제외,F:매치포함) */
  exceptedMatch: "F" | "T";
}

export interface AccountListResponse {
  /** (생성된) 계좌의 순번 */
  accountId: number;

  /** (생성된) 계좌번호 */
  accountNo: string;

  /** (생성된) 은행코드 */
  bkcode: string;

  /** (생성된) 은행명 */
  bankName: string;

  /** 계좌상태정보 */
  tag: string;

  /** (생성된) 계좌의 별칭 */
  rename?: string;

  /** 계좌종류 */
  type: string;

  /** 최종조회일시 */
  lastScrapingAt: string;

  /** 퀵계좌 여부 */
  usingQuick: string;

  /** 스크래핑 가능 시간 */
  availableScrapingAt?: string;

  /** 최종조회결과 */
  scrapingDescription: string;

  /** 계좌표시색상 */
  color: string;

  /** 계좌정렬순서 */
  sort: number;
}

export interface AccountResponse {
  /** (생성된) 계좌의 순번 */
  accountId: number;

  /** (생성된) 계좌번호 */
  accountNo: string;

  /** (생성된) 계좌유형(P:개인,C:법인) */
  type: "P" | "C";

  /** (생성된) 은행코드 */
  bkcode: string;

  /** (생성된) 은행명 */
  bankName: string;

  /** (생성된) 생년월일(개인) 혹은 사업자번호(법인) */
  residentId: string;

  /** (생성된) 계좌의 별칭 */
  rename?: string;

  /** (생성된) 계좌의 조회용 아이디 */
  webId?: string;
}

export interface RegisterAccountInput {
  /** 계좌종류 (P: 개인, C: 법인), (씨티은행의 경우 'P:개인' 불가능) */
  type: "P" | "C";

  /** 계좌번호 */
  accountNo: string;

  /** 은행코드번호 (외환은행의 경우, 계좌생성 불가능) */
  bkcode:
    | "03"
    | "04"
    | "05"
    | "06"
    | "13"
    | "20"
    | "23"
    | "26"
    | "28"
    | "31"
    | "32"
    | "34"
    | "35"
    | "37"
    | "39"
    | "45"
    | "48"
    | "71"
    | "81"
    | "88"
    | "89"
    | "91";

  /** 계좌비밀번호 */
  accountPassword: string;

  /** 사업자번호 혹은 생년월일 */
  regidentId: string;

  /** 계좌별명 */
  rename?: string;

  /** 인터넷뱅킹 or 조회용 아이디 */
  webId?: string;

  /** 인터넷뱅킹 or 조회용 패스워드 */
  webPassword?: string;
}

export interface UpdateAccountInput {
  /** 변경할 16진수 색상 (ex. #ff4343 중 #을 제외한 'ff4343'으로 입력) */
  color?: string;

  /** 은행코드번호 (외환은행의 경우, 계좌생성 불가능) */
  bkcode?:
    | "03"
    | "04"
    | "05"
    | "06"
    | "13"
    | "20"
    | "23"
    | "26"
    | "28"
    | "31"
    | "32"
    | "34"
    | "35"
    | "37"
    | "39"
    | "45"
    | "48"
    | "71"
    | "81"
    | "88"
    | "89"
    | "91";

  /** 계좌비밀번호 */
  accountPassword?: string;

  /** 계좌종류 (P: 개인, C: 법인) */
  type?: "P" | "C";

  /** 사업자번호 혹은 생년월일 */
  regidentId?: string;

  /** 계좌별명 */
  rename?: string;

  /** 인터넷뱅킹 or 조회용 아이디 */
  webId?: string;

  /** 인터넷뱅킹 or 조회용 패스워드 */
  webPassword?: string;
}

export interface UpdateAccountResponse {
  /** (업데이트된) 계좌의 순번 */
  id: number;

  /** (업데이트된) 계좌의 은행코드 */
  bkcode: string;

  /** (업데이트된) 계좌의 은행명 */
  bankName: string;

  /** (개인의 경우) 생년월일 또는 (기업의 경우) 사업자번호 */
  residentId: string;

  /** (업데이트된) 계좌번호 */
  accountNo: string;

  /** (업데이트된) 계좌유형 (P:개인,C:법인) */
  type: "P" | "C";

  /** (업데이트된) 계좌의 색상 */
  color: string;

  /** (업데이트된) 계좌의 인터넷뱅킹 or 조회용 아이디 */
  webId?: string;

  /** (업데이트된) 계좌의 별칭 */
  rename?: string;
}

export interface AccountIdSort {
  /** (정렬 순서를 변경할) 계좌의 순번 */
  id: number;

  /** (정렬 순서를 변경할) 계좌의 정렬순번 */
  sort: number;
}

export interface UpdateAccountsInput {
  /** (정렬순서를 변경할) 계좌의 순번과 정렬순번 목록 */
  accounts: AccountIdSort[];
}

export interface UpdateAccountsResponse {
  /** (정렬순서가 변경된) 계좌의 순번과 정렬순번 목록 */
  accountId: number;

  /** (정렬순서가 변경된) 계좌번호 */
  accountNo: string;

  /** (정렬순서가 변경된) 계좌의 순번과 정렬순번 목록 */
  accountSort: number;
}

export interface GetOrderMatchSummaryResponse {
  /** 미확인 건수 */
  unidentifiedMatchCnt: number | null;

  /** 자동확인 건수 */
  autoMatchCnt: number | null;

  /** 수동확인 건수 */
  manualMatchCnt: number | null;

  /** 유사매치 건수 */
  similarMatchCnt: number | null;

  /** 매치제외 건수 */
  exceptedMatchCnt: number | null;

  /** 미확인 금액 */
  unidentifiedMatchInput: number | null;

  /** 자동확인 금액 */
  autoMatchInput: number | null;

  /** 수동확인 금액 */
  manualMatchInput: number | null;

  /** 유사매치 금액 */
  similarMatchInput: number | null;

  /** 매치제외 금액 */
  exceptedMatchInput: number | null;
}

export interface GetOrderMatchResponseBank {
  /** 거래내역 순번 */
  id: number;

  /** 은행명 */
  name: number;

  /** 거래일자(YYYYMMDD) */
  date: string;

  /** 거래시간(HHMMSS) */
  time: string;

  /** 적요 */
  jukyo: string;

  /** 입금액 */
  input: number;

  /** 메모 */
  memo: string;

  /** 매치대상제외여부 (F:매치포함,T:매치제외) */
  exceptedMatch: "T" | "F";

  /** 매치순번 */
  matchId: number;

  /** 계좌번호 */
  accountNo: string;

  /** 계좌순번 */
  accountId: number;

  /** 매치상태 */
  matchFlag: string;

  /** 자동,수동여부 */
  matchClass: string;

  /** 매치형태(입금내역:주문내역) */
  matchVs: string;
}

export interface OrderDetail {
  /** 입금자명 */
  billngName: string;

  /** 입금자은행명 */
  bankCodeName: string;

  /** 입금계좌번호 */
  bankAccountNo: string;

  /** 주문일자 */
  orderedAt: string;

  /** 결제일자 */
  paymentedAt?: string | null;

  /** 결제금액 */
  payment: number;

  /** 상품명 */
  productNames: string;

  /** 구매자이름 */
  buyerName?: string;
}

export interface Order {
  /** 주문키 */
  id: number;

  /** 주문번호 */
  orderNo: string;

  /** 샵번호 */
  shopNo: number;

  /** 매치번호 */
  matchId: number;
  detail?: OrderDetail;
}

export interface GetOrderMatchResponse {
  /** (매칭된) 입금목록 */
  banks: GetOrderMatchResponseBank[];

  /** (매칭된) 주문목록 */
  orders: Order[];
}

export interface RegisterOrderMatchInputItem {
  /** 매치순번 */
  matchId: number;

  /** 거래내역 순번 (거래내역순번과 주문순번 중 택 1개만 필수입력) */
  bankId?: number | null;

  /** 주문 순번 (거래내역순번과 주문순번 중 택 1개만 필수입력) */
  orderId?: number | null;
}

export interface RegisterOrderMatchInput {
  /** 입금확인 등록 입력 목록값 */
  items: RegisterOrderMatchInputItem[];
}

export interface MatchManual {
  /** 수동매치 순번 */
  id: number;

  /** 수동 match 상태 */
  status: "접수" | "성공" | "실패";

  /** 수동매치유형 */
  type: "both" | "order";

  /** 입금확인JSON TEXT */
  matchText: string;

  /** 결과 */
  description?: string;

  /** 생성일시 */
  createdAt: string;
}

export interface UserJoinRequest {
  /** 이용자 ID */
  mallId: string;

  /** 이용자 이름 */
  mname: string;

  /** 전화번호 */
  mtel: string;

  /** Email */
  memail: string;

  /** state값 */
  state: string;

  /**  가입유형(신규, 전환) */
  joinType: string;
}

export interface UserJoinResponse {
  /** state */
  state: string;
}

export type ConflictException = object;

export interface ChageMemberType {
  /** from */
  from: "cafe24" | "cafe24pkg";

  /** to */
  to: "cafe24" | "cafe24pkg";
}

export interface ChageMemberTypeRespone {
  /** message */
  status: string;

  /** message */
  message: string;
}

export interface UpdateMemberInput {
  /** [기타설정 업데이트시 필수값] 자동입금확인 대상기간 (일(day)단위 입력) */
  autoMatchDay?: number;

  /** [기타설정 업데이트시 필수값] 출금 표기여부 (y:표기, n:미표기) */
  displayWithdraw?: "y" | "n";

  /** [기타설정 업데이트시 필수값] 잔액 표기여부 (y:표기, n:미표기) */
  displayBalance?: "y" | "n";

  /** [정보관리 업데이트시 필수값] 이용자명 */
  name?: string;

  /** [정보관리 업데이트시 필수값] 이용자명 */
  tel?: string;

  /** [정보관리 업데이트시 필수값] 이용자명 */
  email?: string;

  /** [정보관리 업데이트시 필수값] SMS수신여부 (0:수신안함, 1:수신) */
  receiveSms?: 0 | 1;

  /** [정보관리 업데이트시 필수값] email수신여부 (0:수신안함, 1:수신) */
  receiveEmail?: 0 | 1;
}

export interface Qna {
  /** 문의사항 순번 */
  id: number;

  /** 문의 작성일자 */
  questionAt: string;

  /** 문의 작성자 몰아이디 */
  userMallId: string;

  /** 문의 작성자 이메일 */
  userEmail: string;

  /** 문의 제목 */
  questionTitle: string;

  /** 서비스 유형 */
  serviceType: "뱅크다MCafe24" | "뱅크다K" | "뱅크다MBiz";

  /** 문의 내용 */
  questionContent?: string | null;

  /** 문의 답변일자 */
  replyAt?: string | null;

  /** 문의 답변자 아이디 */
  replyAdminId?: string | null;

  /** 문의 답변제목 */
  replyTitle?: string | null;

  /** 문의 답변내용 */
  replyContent?: string | null;

  /** 조회수 */
  count: number;
}

export interface GetNotices {
  items: Qna[];
  meta: PagingMeta & any;
  links: PagingLinks & any;
}

export interface Notice {
  /** 공지사항 순번 */
  id: number;

  /** 공지사항 제목 */
  title: string;

  /** 공지사항 내용 */
  content: string;

  /** 공지사항 조회수 */
  count: number;

  /** 공개범위 */
  partner: "전체" | "뱅크다" | "카페24";

  /** 공지사항 생성일 */
  createdAt: string;
}

export interface OrderPaging {
  /** 페이지목록 */
  items: Order[];
  meta: PagingMeta & any;
  links: PagingLinks & any;
}

export interface RequestGetOrderInput {
  /** 검색시작날짜(YYYYMMDD) */
  startDate: number;

  /** 검색종료날짜(YYYYMMDD) */
  endDate: number;

  /** 주문상태(N00:입금전, N10:상품준비중, N20:배송준비중, N21:배송대기, N30: 배송중, N40:배송완료) */
  orderStatus: "N00" | "N10" | "N20" | "N21" | "N30" | "N40";
}

export interface JobIdResponse {
  /** 작업번호 */
  jobId: number;
}

export interface ConfirmRequestResponse {
  /** 작업번호 */
  result: "success" | "fail" | "ready" | "running" | "cancel";
}

export interface UpdateShopOrdersInputList {
  /** 주문번호 */
  orderNo: string;

  /** 샵 번호 */
  shopNo: number;
}

export interface UpdateShopOrdersInput {
  /** 주문 및 샵번호 목록 */
  list: UpdateShopOrdersInputList[];

  /** 수동매치 유형(order:주문내역만, both: 입금+주문내역 ) */
  type: "order" | "both";
}

export interface GetQnas {
  items: Qna[];
  meta: PagingMeta & any;
  links: PagingLinks & any;
}

export interface RegisterQnaInput {
  /** 질문 제목 */
  questionTitle: string;

  /** 질문 작성자의 이메일 */
  userEmail?: string | null;

  /** 질문 작성 내용 */
  questionContent: string;
}

export interface BankServiceInfo {
  /** 서비스 이름 : 뱅크다, 뱅크다퀵, 패키지 */
  serviceName: string;

  /** 서비스 이름 : 뱅크다, 뱅크다퀵, 패키지 */
  usedAccountCount: string;

  /** 종료일 */
  finishDate: string;

  /** 이용가능한 계좌수 */
  availableCount: string;

  /** 이용중 계좌수 */
  usedCount: string;

  /** 서비스 주기 */
  cycle: string;
}

export interface UnidentifiedServiceInfo {
  /** 서비스 이름 */
  serviceName: string;

  /** 서비스주기 */
  cycle: string;

  /** 종료일 */
  finishDate: string;
}

export interface MatchingShopInfo {
  /** shop 넘버 */
  shopNo: number;

  /** shop 이름 */
  shopName: string;

  /** 기본샵 여부 */
  isDefault: boolean;

  /** 사용 여부 */
  isUse: boolean;

  /** 선택 변경가능 여부 */
  isUpdate: boolean;
}

export interface MultiMallMatchingServiceInfo {
  /** 서비스 이름 */
  serviceName: string;

  /** 서비스주기 */
  cycle: string;

  /** 종료일 */
  finishDate: string;

  /** 멀티몰매칭Shop정보 */
  shops: MatchingShopInfo[];
}

export interface ServiceListResponse {
  bankServiceInfo: BankServiceInfo & any;
  unidentifiedService?: UnidentifiedServiceInfo & any;
  multiMallMatchingService?: MultiMallMatchingServiceInfo & any;
}

export interface RegisterServiceInput {
  /** 패키지 서비스 옵션 */
  serviceType: "multimall" | "unidentified";

  /** 멀티몰 번호, 서비스가 멀티몰일 경우 사용 */
  shopNo?: number;
}

export interface MatchExceptUser {
  /** 매치제외단어 키 */
  id: number;

  /** 제외 단어 */
  word: string;
}

export interface RegisterExceptWordInput {
  /** 자동매치시 제외할 단어 */
  word: string;
}

export interface RegisterExceptUserResponse {
  /** (insert) 매치제외 키 */
  id: number;

  /** (insert) 제외단어 */
  word: string;
}

export interface SettingLog {
  /** 변경로그 */
  contents: string;

  /** 변경일시 */
  createdAt: string;
}

export interface InputOptionType {
  /** 입력란 속성값 name */
  property: string;

  /** 입력란 label 문구 */
  name: string;

  /** 입력란 type */
  inputType: string;

  /** 입력란 도움말 */
  helpDescription?: string;

  /** 입력란 최소길이 */
  minLength: number;

  /** 입력란 최대길이 */
  maxLength: number;

  /** 입력란 필수 여부 */
  require: boolean;
}

export interface InputDetailByBussinse {
  /** 기업뱅킹 은행별 표시 문구 */
  name: string;

  /** 기업뱅킹 타입 */
  type: string;

  /** 기업뱅킹 은행별 입력값 리스트 */
  inputs: InputOptionType[];
}

export interface InputDetailByPersonal {
  /** 개인뱅킹 은행별 표시 문구문구 */
  name: string;

  /** 개인뱅킹 타입 */
  type: string;

  /** 개인뱅킹 은행별 입력값 리스트 */
  inputs?: InputOptionType[];
}

export interface PrepareDocs {
  /** 상단 타이틀 문구 */
  title: string;

  /** 상단 안내 문구 */
  topText: string[];

  /** 안내 버튼 명 */
  buttonText: string;

  /** 하단 안내 문구 */
  bottomText: string[];

  /** 체크 박스 문구 */
  checkboxText: string;
}

export interface AccountInputResponse {
  /** 은행Code */
  bankCode: string;

  /** 은행이름 */
  bankName: string;

  /** 은행별 조회기능 이름 */
  quickSearchName: string;
  bussinse?: InputDetailByBussinse & any;
  personal?: InputDetailByPersonal & any;
  prepareDoc: PrepareDocs & any;
}

export interface PackageUsageData {
  /** 쇼핑몰 아이디 */
  user_id: string;

  /** 사용유무 */
  usage_status: "Y" | "N";

  /** 기본요금 */
  basic_price: number;

  /** 추가/할인 내역 (기본 요금을 포함하지 않음) */
  brief_desc: string;

  /** 추가/할인 요금 (기본 요금을 포함하지 않음) */
  extra_price: number;
}

export interface PackageUsageResponse {
  /** 응답코드 (정상: success/ 실패: fail) */
  code: "success" | "fail";

  /** 실패시 에러 메시지 */
  message: string;

  /** 서비스 코드 (카페24에서 별도 제공) */
  service_code: string;

  /** 데이터 */
  data: PackageUsageData[];
}

export interface UnidentifiedInputConfig {
  /** 회원의 순번 */
  memberId: number;

  /** 수집 시작일 */
  collectStartDay: number;

  /** 수집 종료일 */
  collectEndDay: number;

  /** 게시 요일 목록 */
  reportWeekItems?: string[] | null | null;

  /** 게시 일자 목록 */
  reportDays?: number[] | null | null;

  /** 게시 시간 */
  reportTime: string;

  /** 게시 항목(입금일자,금액,적요) 목록 */
  reportItems: string[];

  /** 문구 제목 */
  reportTitle: string;

  /** 문구 머릿말 */
  reportHeader: string;

  /** 문구 꼬릿말 */
  reportFooter: string;
}

export interface UnidentifiedInputConfigTargetEmail {
  /** 회원의 순번 */
  memberId: number;

  /** 회원의 이메일 */
  email: string;
}

export interface UnidentifiedInputConfigTargetBoard {
  /** 회원의 순번 */
  memberId: number;

  /** 멀티쇼핑몰 순번 */
  shopNo: number;

  /** 게시판 순번 */
  boardId: number;

  /** 게시판 분류 */
  boardType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 11;

  /** 게시판 이름 */
  boardName: string;

  /** 게시판 연동여부 */
  reportFlag: boolean;
}

export interface UnidentifiedInputConfigResponse {
  unidentifiedInputConfig: UnidentifiedInputConfig & any;

  /** 미확인입금대상 이메일 설정 목록 */
  unidentifiedInputTargetEmails?: UnidentifiedInputConfigTargetEmail[];

  /** 미확인입금대상 게시판 설정 목록 */
  unidentifiedInputTargetBoards?: UnidentifiedInputConfigTargetBoard[];
}

export interface SearchUnidentifiedInputReportsResponse {
  /** 페이지목록 */
  items: string[];
  meta: PagingMeta & any;
  links: PagingLinks & any;
}

export interface UnidentifiedInputReport {
  /** 회원의 순번 */
  memberId: number;

  /** 입금미확인내역 리포트 생성일자 (YYYY-MM-DD) */
  reportedAt: string;

  /** S3경로 */
  reportedPath: string;

  /** 생성 일자 */
  createdAt: string;

  /** 업데이트 일자 */
  updatedAt: string;
}

export interface UpdateUnidentifiedInputConfigInputBoard {
  /** 멀티쇼핑몰 순번 */
  shopNo: number;

  /** 게시판 순번 */
  boardId: number;
}

export interface UpdateUnidentifiedInputConfigInput {
  /** 수집시작 일자 (수집종료일자보다 이하의 값을 입력) */
  collectStartDay: number;

  /** 수집종료 일자 */
  collectEndDay: number;

  /** 게시요일 */
  reportWeekItems?: string[] | null | null;

  /** 게시일자 */
  reportDays?: number[] | null | null;

  /** 게시시간 (HHMM: 시간/분) */
  reportTime: string;

  /** 미확인입금대상 게시판 설정의 입력목록 */
  boards?: UpdateUnidentifiedInputConfigInputBoard[] | null | null;

  /** 게시항목 */
  reportItems: string[];

  /** 미확인입금 이메일 목록 설정 */
  emails?: string[] | null | null;

  /** 문구설정 제목 */
  reportTitle: string;

  /** 문구설정 머릿말 */
  reportHeader: string;

  /** 문구설정 꼬릿말 */
  reportFooter: string;
}

export type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
};

export type RequestQueryParamsType = Record<string | number, any>;

interface ApiConfig<SecurityDataType> {
  baseUrl?: string;
  baseApiParams?: RequestParams;
  securityWorker?: (securityData: SecurityDataType) => RequestParams;
}

interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D | null;
  error: E | null;
}

enum BodyType {
  Json,
}

class HttpClient<SecurityDataType> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: RequestQueryParamsType, key: string) {
    return (
      encodeURIComponent(key) + "=" + encodeURIComponent(Array.isArray(query[key]) ? query[key].join(",") : query[key])
    );
  }

  protected addQueryParams(rawQuery?: RequestQueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys.length
      ? `?${keys
          .map((key) =>
            typeof query[key] === "object" && !Array.isArray(query[key])
              ? this.addQueryParams(query[key] as object).substring(1)
              : this.addQueryParam(query, key),
          )
          .join("&")}`
      : "";
  }

  private bodyFormatters: Record<BodyType, (input: any) => any> = {
    [BodyType.Json]: JSON.stringify,
  };

  private mergeRequestOptions(params: RequestParams, securityParams?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {}),
      },
    };
  }

  private safeParseResponse = <T = any, E = any>(response: Response): Promise<HttpResponse<T, E>> => {
    const r = response as HttpResponse<T, E>;
    r.data = null;
    r.error = null;

    return response
      .json()
      .then((data) => {
        if (r.ok) {
          r.data = data;
        } else {
          r.error = data;
        }
        return r;
      })
      .catch((e) => {
        r.error = e;
        return r;
      });
  };

  public request = <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    bodyType?: BodyType,
    secureByDefault?: boolean,
  ): Promise<HttpResponse<T>> => {
    const requestUrl = `${this.baseUrl}${path}`;
    const secureOptions =
      (secureByDefault || secure) && this.securityWorker ? this.securityWorker(this.securityData) : {};
    const requestOptions = {
      ...this.mergeRequestOptions(params, secureOptions),
      method,
      body: body ? this.bodyFormatters[bodyType || BodyType.Json](body) : null,
    };

    return fetch(requestUrl, requestOptions).then(async (response) => {
      const data = await this.safeParseResponse<T, E>(response);
      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title 뱅크다M 카페24 웹앱 REST API
 * @version 0.1.0
 * 뱅크다M 카페24 웹앱 REST API
 */
export class Api<SecurityDataType = any> extends HttpClient<SecurityDataType> {
  public = {
    /**
     * @tags 인증정보
     * @name AuthController_preLogin
     * @summary 로그인 전처리 (완료)
     * @request GET:/public/api/auth
     * @description 카페24 앱스토어에서 전달된 값을 받고 stateId를 생성 및 저장한 후 302코드로 카페24사이트로 리다이렉트 수행
     */
    authControllerPreLogin: (
      query: {
        mall_id: string;
        user_id: string;
        user_name: string;
        user_type: "P" | "A";
        is_multi_shop?: string;
        lang?: string;
        nation?: string;
        shop_no: string;
        timestamp: string;
        hmac: string;
        service_type: "cafe24" | "cafe24pkg";
      },
      params?: RequestParams,
    ) => this.request<any, any>(`/public/api/auth${this.addQueryParams(query)}`, "GET", params),

    /**
     * @tags 인증정보
     * @name AuthController_login
     * @summary 로그인 (토큰발행)
     * @request POST:/public/api/auth
     * @description 카페24앱을 통해 접속해서 받은정보로 로그인을 한다
     */
    authControllerLogin: (data: FilterAuthRedirect, params?: RequestParams) =>
      this.request<LoginResponse, ExceptionResponse>(`/public/api/auth`, "POST", params, data),

    /**
     * @tags 인증정보
     * @name AuthController_refreshLogin
     * @summary 토큰갱신
     * @request PUT:/public/api/auth
     * @description 토큰 유효기간이 얼마남지 않거나 서비스 변경이 있는경우에 토큰을 갱신한다.
     */
    authControllerRefreshLogin: (data: RefreshLoginRequest, params?: RequestParams) =>
      this.request<any, any>(`/public/api/auth`, "PUT", params, data),

    /**
     * @tags 인증정보
     * @name AuthController_logout
     * @summary 로그아웃 (토큰제거)
     * @request DELETE:/public/api/auth/{refreshToken}
     * @secure
     * @description (로그아웃시) 토큰을 제거한다
     */
    authControllerLogout: (refreshToken: string, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/auth/${refreshToken}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_searchBankItems
     * @summary 거래내역 목록을 검색
     * @request GET:/public/api/member/{memberId}/account/bank
     * @secure
     * @description 회원이 보유한 계좌의 거래내역 목록을 검색한다
     */
    bankControllerSearchBankItems: (
      memberId: number,
      query: {
        startDate: number;
        endDate: number;
        searchType?: "JUKYO" | "PAYMENT" | "MEMO";
        inOutType?: "INPUT" | "OUTPUT";
        exceptType?: "F" | "T";
        matchAuto?: "T";
        matchManual?: "T";
        matchSimmillar?: "T";
        matchUnidentified?: "T";
        accountIds?: number[];
        keyword?: string;
        page: number;
        limit: number;
        route?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<BankPaging, ExceptionResponse>(
        `/public/api/member/${memberId}/account/bank${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_saveBanksExceptedMatch
     * @summary (다수의) 거래내역 목록의 매치대상제외 여부를 수정 [완료]
     * @request PATCH:/public/api/member/{memberId}/account/bank
     * @secure
     * @description (다수의) 거래내역 목록의 매치대상제외 여부를 수정한다
     */
    bankControllerSaveBanksExceptedMatch: (memberId: number, data: UpdateBankMatchInput, params?: RequestParams) =>
      this.request<SaveBanksExceptedMatchResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/account/bank`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_searchBankItemsAll
     * @summary 거래내역 목록을 검색 (페이징 없음)
     * @request GET:/public/api/member/{memberId}/account/bank/all
     * @secure
     * @description 회원이 보유한 계좌의 거래내역 목록을 검색한다
     */
    bankControllerSearchBankItemsAll: (
      memberId: number,
      query: {
        startDate: number;
        endDate: number;
        searchType?: "JUKYO" | "PAYMENT" | "MEMO";
        inOutType?: "INPUT" | "OUTPUT";
        exceptType?: "F" | "T";
        matchAuto?: "T";
        matchManual?: "T";
        matchSimmillar?: "T";
        matchUnidentified?: "T";
        accountIds?: number[];
        keyword?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<Bank[], any>(
        `/public/api/member/${memberId}/account/bank/all${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_getBankBalances
     * @summary 계좌잔액 목록 검색 [완료]
     * @request GET:/public/api/member/{memberId}/account/bank/balance
     * @secure
     * @description (전체, 계좌별) 잔액 목록을 검색한다
     */
    bankControllerGetBankBalances: (memberId: number, params?: RequestParams) =>
      this.request<BankBalanceView[], ExceptionResponse>(
        `/public/api/member/${memberId}/account/bank/balance`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_searchBankSummaries
     * @summary 계좌거래금액 목록 검색 [완료]
     * @request GET:/public/api/member/{memberId}/account/bank/summary
     * @secure
     * @description 회원의 (전체, 계좌별, 입금, 출금) 거래금액목록을 검색한다
     */
    bankControllerSearchBankSummaries: (
      memberId: number,
      query?: {
        startDate?: string;
        endDate?: string;
        searchType?: "JUKYO" | "PAYMENT" | "MEMO";
        keyword?: string;
        accountIds?: number[];
        paymentOption?: "INPUT" | "OUTPUT";
      },
      params?: RequestParams,
    ) =>
      this.request<SearchBankSummariesResponse[], ExceptionResponse>(
        `/public/api/member/${memberId}/account/bank/summary${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_deleteBankItem
     * @summary 거래내역을 삭제 [완료]
     * @request DELETE:/public/api/member/{memberId}/account/{accountId}/bank/{bankId}
     * @secure
     * @description 거래내역을 삭제한다
     */
    bankControllerDeleteBankItem: (memberId: number, accountId: number, bankId: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}/account/${accountId}/bank/${bankId}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 거래내역정보
     * @name BankController_saveBankMemo
     * @summary (특정) 거래내역의 메모를 저장 [완료]
     * @request PATCH:/public/api/member/{memberId}/account/{accountId}/bank/{bankId}
     * @secure
     * @description (특정) 거래내역의 메모를 저장한다
     */
    bankControllerSaveBankMemo: (
      memberId: number,
      accountId: number,
      bankId: number,
      data: UpdateBankInput,
      params?: RequestParams,
    ) =>
      this.request<SaveBankMemoResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/account/${accountId}/bank/${bankId}`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_searchAccounts
     * @summary 회원이 보유한 계좌정보 목록을 검색 [완료]
     * @request GET:/public/api/member/{memberId}/account
     * @secure
     * @description 회원이 보유한 계좌정보 목록을 검색한다
     */
    accountControllerSearchAccounts: (
      memberId: number,
      query?: { tag?: ("M" | "T" | "F" | "H")[] },
      params?: RequestParams,
    ) =>
      this.request<AccountListResponse[], ExceptionResponse>(
        `/public/api/member/${memberId}/account${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_registerAccount
     * @summary 계좌를 등록 [완료]
     * @request POST:/public/api/member/{memberId}/account
     * @secure
     * @description 새로운 계좌를 등록한다
     */
    accountControllerRegisterAccount: (memberId: number, data: RegisterAccountInput, params?: RequestParams) =>
      this.request<AccountResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/account`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_updateAccounts
     * @summary 계좌의 정렬 순번을 변경 [완료]
     * @request PATCH:/public/api/member/{memberId}/account
     * @secure
     * @description (2개의) 계좌의 정렬 순번을 교체함
     */
    accountControllerUpdateAccounts: (memberId: number, data: UpdateAccountsInput, params?: RequestParams) =>
      this.request<UpdateAccountsResponse[], ExceptionResponse>(
        `/public/api/member/${memberId}/account`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_getAccount
     * @summary 회원의 특정 계좌를 조회 [완료]
     * @request GET:/public/api/member/{memberId}/account/{accountId}
     * @secure
     * @description 회원의 특정 계좌내용을 조회한다
     */
    accountControllerGetAccount: (memberId: number, accountId: number, params?: RequestParams) =>
      this.request<AccountResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/account/${accountId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_deleteAccount
     * @summary 해당회원의 계좌를 삭제 [완료]
     * @request DELETE:/public/api/member/{memberId}/account/{accountId}
     * @secure
     * @description 해당회원의 계좌를 삭제한다
     */
    accountControllerDeleteAccount: (memberId: number, accountId: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}/account/${accountId}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 계좌정보
     * @name AccountController_updateAccount
     * @summary 특정 계좌정보를 수정 [완료]
     * @request PATCH:/public/api/member/{memberId}/account/{accountId}
     * @secure
     * @description 특정 계좌의 정보 혹은 색상만을 수정한다.
     */
    accountControllerUpdateAccount: (
      accountId: number,
      memberId: number,
      data: UpdateAccountInput,
      params?: RequestParams,
    ) =>
      this.request<UpdateAccountResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/account/${accountId}`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문매칭정보
     * @name MatchController_getOrderMatchSummary
     * @summary 입금확인 상태별 통계조회 [완료]
     * @request GET:/public/api/member/{memberId}/match/summary
     * @secure
     * @description 입금확인 상태별 통계를 조회한다
     */
    matchControllerGetOrderMatchSummary: (
      memberId: number,
      query: {
        startDate: number;
        endDate: number;
        searchType?: "JUKYO" | "PAYMENT" | "MEMO";
        inOutType?: "INPUT" | "OUTPUT";
        exceptType?: "F" | "T";
        matchAuto?: "T";
        matchManual?: "T";
        matchSimmillar?: "T";
        matchUnidentified?: "T";
        accountIds?: number[];
        keyword?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<GetOrderMatchSummaryResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/match/summary${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문매칭정보
     * @name MatchController_getOrderMatch
     * @summary 입금확인 상세조회 [완료]
     * @request GET:/public/api/member/{memberId}/match/{matchId}
     * @secure
     * @description 특정 회원의 입금확인 상세정보를 조회한다
     */
    matchControllerGetOrderMatch: (memberId: number, matchId: number, params?: RequestParams) =>
      this.request<GetOrderMatchResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/match/${matchId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문매칭정보
     * @name MatchController_registerOrderMatch
     * @summary 수동입금확인 등록 [완료]
     * @request POST:/public/api/member/{memberId}/match
     * @secure
     * @description 수동입금확인을 등록한다
     */
    matchControllerRegisterOrderMatch: (memberId: number, data: RegisterOrderMatchInput, params?: RequestParams) =>
      this.request<MatchManual, ExceptionResponse>(
        `/public/api/member/${memberId}/match`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 회원정보
     * @name MemberController_getMember
     * @summary 회원정보 조회 [완료]
     * @request GET:/public/api/member/{memberId}
     * @secure
     * @description 특정 회원의 정보를 조회한다
     */
    memberControllerGetMember: (memberId: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(`/public/api/member/${memberId}`, "GET", params, null, BodyType.Json, true),

    /**
     * @tags 회원정보
     * @name MemberController_updateMember
     * @summary 회원정보 수정 [완료]
     * @request PATCH:/public/api/member/{memberId}
     * @secure
     * @description 회원정보를 수정한다
     */
    memberControllerUpdateMember: (memberId: number, data: UpdateMemberInput, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 회원정보
     * @name MemberController_join
     * @summary 회원가입 - 완료
     * @request POST:/public/api/member
     * @description 신규이용자의 기본정보를 전달받아 회원정보 테이블에 등록
     */
    memberControllerJoin: (data: UserJoinRequest, params?: RequestParams) =>
      this.request<UserJoinResponse, ExceptionResponse | ConflictException>(`/public/api/member`, "POST", params, data),

    /**
     * @tags 회원정보
     * @name MemberController_searchMembers
     * @summary (관리자가) 회원정보 목록 검색
     * @request GET:/public/api/member
     * @secure
     * @description (관리자가) 회원목록을 검색한다
     */
    memberControllerSearchMembers: (params?: RequestParams) =>
      this.request<any, any>(`/public/api/member`, "GET", params, null, BodyType.Json, true),

    /**
     * @tags 회원정보
     * @name MemberController_changeMemberType
     * @summary 회원의 이용서비스를 변경 - 완료
     * @request POST:/public/api/member/{memberId}/type
     * @secure
     * @description 회원의 이용서비스를 변경(cafe24 -> cafe24pkg,  cafe24pkg -> cafe24)한다.
     */
    memberControllerChangeMemberType: (memberId: number, data: ChageMemberType, params?: RequestParams) =>
      this.request<ChageMemberTypeRespone, any>(
        `/public/api/member/${memberId}/type`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 공지사항정보
     * @name NoticeController_getNotices
     * @summary 공지사항 목록 검색 [완료]
     * @request GET:/public/api/notice
     * @secure
     * @description 공지사항 목록을 검색한다
     */
    noticeControllerGetNotices: (query: { page: number; limit: number; route?: string }, params?: RequestParams) =>
      this.request<GetNotices, ExceptionResponse>(
        `/public/api/notice${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 공지사항정보
     * @name NoticeController_getNotice
     * @summary 공지사항 조회 [완료]
     * @request GET:/public/api/notice/{noticeId}
     * @secure
     * @description 공지사항을 조회한다
     */
    noticeControllerGetNotice: (noticeId: number, params?: RequestParams) =>
      this.request<Notice, ExceptionResponse>(
        `/public/api/notice/${noticeId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문내역정보
     * @name OrderController_searchOrders
     * @summary 주문내역 목록을 검색 [완료]
     * @request GET:/public/api/member/{memberId}/order
     * @secure
     * @description 회원의 주문내역 목록을 검색한다
     */
    orderControllerSearchOrders: (
      memberId: number,
      query: {
        startDate: number;
        endDate: number;
        orderStatus: "N00" | "N10" | "N20" | "N21" | "N30" | "N40";
        searchType?: "BILLINGNAME" | "BUYERNAME" | "ORDERNO" | "PAYMENT" | "BANKCODENAME";
        keyword?: string;
        page: number;
        limit: number;
        route?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<OrderPaging, ExceptionResponse>(
        `/public/api/member/${memberId}/order${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문내역정보
     * @name OrderController_updateShopOrders
     * @summary 주문내역 목록을 수정
     * @request PATCH:/public/api/member/{memberId}/order
     * @description 회원의 주문내역 목록을 수정한다
     */
    orderControllerUpdateShopOrders: (memberId: number, data: UpdateShopOrdersInput, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(`/public/api/member/${memberId}/order`, "PATCH", params, data),

    /**
     * @tags 주문내역정보
     * @name OrderController_requestOrder
     * @summary 카페 24에 주문정보 API 연동 요청
     * @request POST:/public/api/member/{memberId}/order/request
     * @secure
     * @description 주문정보 검색 이전에 카페24 주문정보를 가져오도록 요청한다
     */
    orderControllerRequestOrder: (memberId: number, data: RequestGetOrderInput, params?: RequestParams) =>
      this.request<JobIdResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/order/request`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 주문내역정보
     * @name OrderController_confirmRequestOrder
     * @summary 주문정보 요청건 완료여부 확인
     * @request GET:/public/api/member/{memberId}/order/request/{requestId}
     * @secure
     * @description 주문정보 요청건에 대한 완료여부를 확인한다
     */
    orderControllerConfirmRequestOrder: (memberId: number, requestId: number, params?: RequestParams) =>
      this.request<ConfirmRequestResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/order/request/${requestId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Q&A정보
     * @name QnaController_getQnas
     * @summary Q&A 문의 목록 검색 [완료]
     * @request GET:/public/api/qna
     * @secure
     * @description Q&A 문의유형의 목록을 검색한다
     */
    qnaControllerGetQnas: (query: { page: number; limit: number; route?: string }, params?: RequestParams) =>
      this.request<GetQnas, ExceptionResponse>(
        `/public/api/qna${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Q&A정보
     * @name QnaController_registerQna
     * @summary Q&A 문의 등록 [완료]
     * @request POST:/public/api/qna
     * @secure
     * @description Q&A 문의유형의 글을 등록한다
     */
    qnaControllerRegisterQna: (data: RegisterQnaInput, params?: RequestParams) =>
      this.request<Qna, ExceptionResponse>(`/public/api/qna`, "POST", params, data, BodyType.Json, true),

    /**
     * @tags Q&A정보
     * @name QnaController_getStickyQnas
     * @summary Q&A 공지(=고정) 목록 검색 [완료]
     * @request GET:/public/api/sticky/qna
     * @secure
     * @description Q&A 공지유형의 목록을 검색한다
     */
    qnaControllerGetStickyQnas: (params?: RequestParams) =>
      this.request<GetQnas, ExceptionResponse>(`/public/api/sticky/qna`, "GET", params, null, BodyType.Json, true),

    /**
     * @tags Q&A정보
     * @name QnaController_getQna
     * @summary Q&A 조회 [완료]
     * @request GET:/public/api/qna/{qnaId}
     * @secure
     * @description Q&A를 조회한다
     */
    qnaControllerGetQna: (qnaId: number, params?: RequestParams) =>
      this.request<Qna, ExceptionResponse>(`/public/api/qna/${qnaId}`, "GET", params, null, BodyType.Json, true),

    /**
     * @tags 서비스정보
     * @name ServiceItemController_getService
     * @summary 서비스 이용현황을 조회
     * @request GET:/public/api/member/{memberId}/service
     * @secure
     * @description 회원의 서비스 이용현황을 조회한다
     */
    serviceItemControllerGetService: (memberId: number, params?: RequestParams) =>
      this.request<ServiceListResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/service`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 서비스정보
     * @name ServiceItemController_registerService
     * @summary 서비스 등록
     * @request POST:/public/api/member/{memberId}/service
     * @secure
     * @description 회원의 서비스를 등록한다
     */
    serviceItemControllerRegisterService: (memberId: number, data: RegisterServiceInput, params?: RequestParams) =>
      this.request<RegisterServiceInput, ExceptionResponse>(
        `/public/api/member/${memberId}/service`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 서비스정보
     * @name ServiceItemController_deleteMultimallMatchingService
     * @summary 멀티몰매칭서비스 해지
     * @request DELETE:/public/api/member/{memberId}/service/shop/{shopNo}
     * @secure
     * @description 회원의 멀티몰매칭서비스를 해지한다
     */
    serviceItemControllerDeleteMultimallMatchingService: (memberId: number, shopNo: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}/service/shop/${shopNo}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 서비스정보
     * @name ServiceItemController_deleteUnidentifiedService
     * @summary 미사용입금내역서비스 해지
     * @request DELETE:/public/api/member/{memberId}/service/unidentified
     * @secure
     * @description 회원의 미사용입금내역서비스를 해지한다
     */
    serviceItemControllerDeleteUnidentifiedService: (memberId: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}/service/unidentified`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 매치제외단어 정보 및 설정 변경 로그정보
     * @name SettingController_getMatchExceptUser
     * @summary 매치제외 단어 조회 (완료)
     * @request GET:/public/api/member/{memberId}/setting/except
     * @secure
     * @description 자동매치시 제외한 단어 조회
     */
    settingControllerGetMatchExceptUser: (memberId: number, params?: RequestParams) =>
      this.request<MatchExceptUser[], ExceptionResponse>(
        `/public/api/member/${memberId}/setting/except`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 매치제외단어 정보 및 설정 변경 로그정보
     * @name SettingController_registerExceptUser
     * @summary 매치제외 단어 설정 (완료)
     * @request POST:/public/api/member/{memberId}/setting/except
     * @secure
     * @description 자동매치시 제외할 단어를 설정
     */
    settingControllerRegisterExceptUser: (memberId: number, data: RegisterExceptWordInput, params?: RequestParams) =>
      this.request<RegisterExceptUserResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/setting/except`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 매치제외단어 정보 및 설정 변경 로그정보
     * @name SettingController_deleteMatchExceptUser
     * @summary 매치제외 단어 삭제 (완료)
     * @request DELETE:/public/api/member/{memberId}/setting/except/{exceptId}
     * @secure
     * @description 자동매치시 매치제외 단어를 삭제
     */
    settingControllerDeleteMatchExceptUser: (memberId: number, exceptId: number, params?: RequestParams) =>
      this.request<any, ExceptionResponse>(
        `/public/api/member/${memberId}/setting/except/${exceptId}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 매치제외단어 정보 및 설정 변경 로그정보
     * @name SettingController_getSettingLogs
     * @summary 설정변경 로그 목록 검색 (완료)
     * @request GET:/public/api/member/{memberId}/setting/log
     * @secure
     * @description 설정변경된 로그 목록 최근 20개 검색
     */
    settingControllerGetSettingLogs: (memberId: number, params?: RequestParams) =>
      this.request<SettingLog[], ExceptionResponse>(
        `/public/api/member/${memberId}/setting/log`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 설정조회
     * @name ConfigInfoController_getAccount
     * @summary 은행별 필수 입력정보
     * @request GET:/public/api/configinfo/account/{accountCode}
     * @secure
     * @description 은행별 필수 입력정보를 조회
     */
    configInfoControllerGetAccount: (
      accountCode:
        | "03"
        | "04"
        | "05"
        | "06"
        | "13"
        | "20"
        | "23"
        | "26"
        | "28"
        | "31"
        | "32"
        | "34"
        | "35"
        | "37"
        | "39"
        | "45"
        | "48"
        | "71"
        | "81"
        | "88"
        | "89"
        | "91",
      params?: RequestParams,
    ) =>
      this.request<AccountInputResponse, ExceptionResponse>(
        `/public/api/configinfo/account/${accountCode}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 패키지사용량정보 (for 카페24)
     * @name PackageUsageController_search
     * @summary 패키지 사용량 정보 조회
     * @request GET:/public/api/package/usage
     * @description 카페24에서 패키지의 사용량 정보를 조회한다 (과금청구 목적, 1차 - 01:00, 2차 - 02:00)
     */
    packageUsageControllerSearch: (
      query: { service_code: string; user_id: string; start_date: string; end_date?: string },
      params?: RequestParams,
    ) =>
      this.request<PackageUsageResponse, any>(`/public/api/package/usage${this.addQueryParams(query)}`, "GET", params),

    /**
     * @tags 미확인입금내역정보
     * @name UnidentifiedInputController_getUnidentifiedInputConfig
     * @summary 미확인입금내역 서비스 설정 조회 [완료]
     * @request GET:/public/api/member/{memberId}/unidentified/setting
     * @secure
     * @description 미확인입금내역 서비스 설정을 조회한다
     */
    unidentifiedInputControllerGetUnidentifiedInputConfig: (memberId: number, params?: RequestParams) =>
      this.request<UnidentifiedInputConfigResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/unidentified/setting`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 미확인입금내역정보
     * @name UnidentifiedInputController_updateUnidentifiedInputConfig
     * @summary 미확인입금내역 서비스 설정 수정 [완료]
     * @request PATCH:/public/api/member/{memberId}/unidentified/setting
     * @secure
     * @description 미확인입금내역 서비스 설정을 수정한다
     */
    unidentifiedInputControllerUpdateUnidentifiedInputConfig: (
      memberId: number,
      data: UpdateUnidentifiedInputConfigInput,
      params?: RequestParams,
    ) =>
      this.request<UnidentifiedInputConfigResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/unidentified/setting`,
        "PATCH",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 미확인입금내역정보
     * @name UnidentifiedInputController_searchUnidentifiedInputReports
     * @summary 미확인입금내역 리포트 목록 검색 [완료]
     * @request GET:/public/api/member/{memberId}/unidentified/report
     * @secure
     * @description 미확인입금내역 리포트 목록을 검색한다
     */
    unidentifiedInputControllerSearchUnidentifiedInputReports: (
      memberId: number,
      query: { page: number; limit: number; route?: string },
      params?: RequestParams,
    ) =>
      this.request<SearchUnidentifiedInputReportsResponse, ExceptionResponse>(
        `/public/api/member/${memberId}/unidentified/report${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags 미확인입금내역정보
     * @name UnidentifiedInputController_getUnidentifiedInputReport
     * @summary 미확인입금내역 리포트를 조회 [완료]
     * @request GET:/public/api/member/{memberId}/unidentified/report/{reportId}
     * @secure
     * @description 미확인입금내역 리포트를 조회한다
     */
    unidentifiedInputControllerGetUnidentifiedInputReport: (
      memberId: number,
      reportId: number,
      params?: RequestParams,
    ) =>
      this.request<UnidentifiedInputReport, ExceptionResponse>(
        `/public/api/member/${memberId}/unidentified/report/${reportId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),
  };
}
