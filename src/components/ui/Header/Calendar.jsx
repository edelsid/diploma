import Cell from "../../items/Cell";

export default function Calendar() {
  return (
    <div className="calendarWrapper">
      <div className="calendarArrow"></div>
      <div className="calendar">
        <p className="calendarHeader">Month</p>
        <div className="calendarGrid">
          {/* {month.map((item) => <Cell prop={item}></Cell>)} */}
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
          <Cell>7</Cell>
          <Cell>8</Cell>
          <Cell>9</Cell>
          <Cell>10</Cell>
          <Cell>11</Cell>
          <Cell>12</Cell>
          <Cell>13</Cell>
          <Cell>14</Cell>
          <Cell>15</Cell>
          <Cell>16</Cell>
          <Cell>17</Cell>
          <Cell>18</Cell>
          <Cell>19</Cell>
          <Cell>20</Cell>
          <Cell>21</Cell>
          <Cell>22</Cell>
          <Cell>23</Cell>
          <Cell>24</Cell>
          <Cell>25</Cell>
          <Cell>26</Cell>
          <Cell>27</Cell>
          <Cell>28</Cell>
          <Cell>29</Cell>
          <Cell>30</Cell>
          <Cell>31</Cell>
        </div>
      </div>
    </div>
  )
}
