import React from "react";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  //로컬 상태
  state = {
    location: "", //변화상태기록 - 서버요청 위해서
    dateStart: "",//변화상태기록 - 서버요청 위해서
    dateEnd: "",  //변화상태기록 - 서버요청 위해서
    personNum: "",//변화상태기록 - 서버요청 위해서
    isOpenBox: [false, false, false], //오픈 이벤트 기록하기 위해서
  };
  
  //검색 기능시 서버에 요청하는 onClickEvent 메서드 필요
  //전체 Input이 ComboBox로 구성될지, 혹은 Input으로 구성될지 결정

  typingHandler(e){
    //값이 바뀌면 상태값에 저장되도록
  }
  render() {
    const { isOpenBox } = this.state;
    return (
      <>
        <form>
          <div className="navigationWrapper">
            <div className="navigationSearch">
              <div className="geolocationSearch">
                <span>위치</span>
                <input type="" onChange={/*상태값을 최신화하는 이벤트메서드*/}></input>
              </div>
              <div className="dateStartSearch">
                <span>시작일</span>
                <input type="" onChange={/*상태값을 최신화하는 이벤트메서드*/}></input>
              </div>
              <div className="dateEndSearch">
                <span>종료일</span>
                <input type="" onChange={/*상태값을 최신화하는 이벤트메서드*/}></input>
              </div>
              <div className="personNumSearch">
                <span>인원</span>
                <input type="" onChange={/*상태값을 최신화하는 이벤트메서드*/}></input>
              </div>
              <div className="searchBtn" onClick={/* 검색 요청을 위한 메서드 */}>
                <i>검색아이콘</i>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
