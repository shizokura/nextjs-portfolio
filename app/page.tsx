import React from "react";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <div className="w-[1024px] h-screen m-auto text-center flex items-center justify-center relative">
        <div>
          <svg className="mb-10 mr-auto ml-auto" width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_64_1298" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"/>
            </mask>
            <path d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_64_1298)"/>
            <mask id="path-3-outside-2_64_1298" maskUnits="userSpaceOnUse" x="76.5" y="0" width="80" height="119" fill="black">
              <rect fill="white" x="76.5" width="80" height="119"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"/>
            </mask>
            <path d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z" fill="#C778DD" mask="url(#path-3-outside-2_64_1298)"/>
          </svg>
          <div className="text-white text-3xl font-semibold">I&apos;m a <span className="text-purple-400 text-3xl font-semibold">fullstack web developer</span></div>
          <div className="text-gray-400 text-base font-normal leading-normal">Always learning and improving my skills.</div>
          <div className="px-4 py-2 border border-purple-400 justify-start items-start gap-2.5 inline-flex mt-6">
            <button className="text-white text-base font-medium">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-20">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>projects</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
          <div className="text-white text-base font-medium">{ 'View all ~~>' }</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-gray-400 border">
            <Image className="w-full h-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAADICAYAAACOJqhiAAASIklEQVR4Xu2dS8gdRROGx61BXelC4yIKIdFFRCIxihAMSCAEL4gE8Ya4SCQqCF4iWQQimmQheHchgWgIIuIFNyKoCxGVBFEhKoK6MArqyuv2/6kDc5hTp2e6Z945+fJ1P2f38U3VdD018051T3fPGcePH/9fxQ8CEIAABFoJnIFQcnVAAAIQ6CaAUHKFQAACEIgQQCi5RCAAAQgglFwDEIAABDQCVJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfFrtf7++++r//77b/L/c889t7rgggtGOdMvv/xS/fHHHxNfZ555ZrV69epR/JqTL7/8cupr1apV1TnnnDOa7+XgqJkza+9ll102SrMXlbM///yz+umnn6ZtHKu9owSdmROEcsSEmtC899571RtvvDHndeXKldV1111XXX/99b1F0260d955Z+L3r7/+mvF99tlnT/xu2bJl0I1tbX799der999/P9jmm266adLmXEWzK34Dcskll1S33XbbhHGfn4mY5ezNN9+sTp48OWdq/m655ZZBObNcHTlypPrmm2/m/A5tb5/YSjwWoRwp6y+88EJ16NChqDcTtkcffTT5xrObYv/+/XMCGTrR3XffXd17773RNtQHpLbZRP7gwYOjVq/JjVzQgSZkBw4cCD4gQqc0AdqzZ08SA6tMH3744aBAet99cmZttjZ8+umnUSobN26sHn/88WwfcFEAIx+AUI4A1ITMV5EmiJdeeunE+4kTJ+aE7v7776/uuOOOzrObSD722GNzx9hNYL+ff/557ma0/z377LPRqEIiaYJ44YUXVnZD+mrF4nn11Vd7V8PRhizBARbffffdF4yxzlmIrTF46aWXOsXSqv/bb799Lt91zkLXQqpY2vXi82ICbtV+qL32v1deeWUJCOd3SoRSzOknn3xSPfDAA1MvbRVjqDJ8+eWXW7teoRvOxNV3g63r+NRTT83cQDERNpt77rlnps3moznGZed//vnnZyquVBEWkS7c3D8k7AHx0EMPVVdfffXMuUNsY+JjAtys+G6++eZq586dM5Vd32vBGmWC98wzz0zbZ+148sknZx5cQ66FhcPO5AQIpZjIG264YVrVxSoO65Ldeuut0zN2CY+vUp944onW7rpVSHfeeedMO956663Wbpdvc1el2KcdIspTYm4PAHvY1D8THKvAu8ZgrapvjuG25cL3ALoqRbsWduzYMa08TazffvvtIINQm9sqxVC1bGOlY71MPCVJOg1PglAKSfHVZKySs1N54fnggw/mblK72Ddv3pwkqPVB/iZ9+umn5yokO9a3uUuAa99N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" width={330} height={200} alt="placeholder" />
            <div className="text-gray-400 p-2 flex gap-2 items-center border-gray-400 border-t border-b">
              <div className="text-base">HTML</div>
              <div className="text-base">SCSS</div>
              <div className="text-base">Python</div>
              <div className="text-base">Flask</div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="text-white text-2xl font-medium">Chert Nodes</div>
              <div className="text-gray-400 text-base">Minecraft servers hosting</div>
              <div className="flex gap-4">
                <button className="py-2 px-4 text-base font-medium text-white border border-purple-400">{ 'Live <~>' }</button>
                <button className="py-2 px-4 text-base font-medium text-gray-400 border border-gray-400">{ 'Cached >=' }</button>
              </div>
            </div>
          </div>
          <div className="border-gray-400 border">
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAADICAYAAACOJqhiAAASIklEQVR4Xu2dS8gdRROGx61BXelC4yIKIdFFRCIxihAMSCAEL4gE8Ya4SCQqCF4iWQQimmQheHchgWgIIuIFNyKoCxGVBFEhKoK6MArqyuv2/6kDc5hTp2e6Z945+fJ1P2f38U3VdD018051T3fPGcePH/9fxQ8CEIAABFoJnIFQcnVAAAIQ6CaAUHKFQAACEIgQQCi5RCAAAQgglFwDEIAABDQCVJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfFrtf7++++r//77b/L/c889t7rgggtGOdMvv/xS/fHHHxNfZ555ZrV69epR/JqTL7/8cupr1apV1TnnnDOa7+XgqJkza+9ll102SrMXlbM///yz+umnn6ZtHKu9owSdmROEcsSEmtC899571RtvvDHndeXKldV1111XXX/99b1F0260d955Z+L3r7/+mvF99tlnT/xu2bJl0I1tbX799der999/P9jmm266adLmXEWzK34Dcskll1S33XbbhHGfn4mY5ezNN9+sTp48OWdq/m655ZZBObNcHTlypPrmm2/m/A5tb5/YSjwWoRwp6y+88EJ16NChqDcTtkcffTT5xrObYv/+/XMCGTrR3XffXd17773RNtQHpLbZRP7gwYOjVq/JjVzQgSZkBw4cCD4gQqc0AdqzZ08SA6tMH3744aBAet99cmZttjZ8+umnUSobN26sHn/88WwfcFEAIx+AUI4A1ITMV5EmiJdeeunE+4kTJ+aE7v7776/uuOOOzrObSD722GNzx9hNYL+ff/557ma0/z377LPRqEIiaYJ44YUXVnZD+mrF4nn11Vd7V8PRhizBARbffffdF4yxzlmIrTF46aWXOsXSqv/bb799Lt91zkLXQqpY2vXi82ICbtV+qL32v1deeWUJCOd3SoRSzOknn3xSPfDAA1MvbRVjqDJ8+eWXW7teoRvOxNV3g63r+NRTT83cQDERNpt77rlnps3moznGZed//vnnZyquVBEWkS7c3D8k7AHx0EMPVVdfffXMuUNsY+JjAtys+G6++eZq586dM5Vd32vBGmWC98wzz0zbZ+148sknZx5cQ66FhcPO5AQIpZjIG264YVrVxSoO65Ldeuut0zN2CY+vUp944onW7rpVSHfeeedMO956663Wbpdvc1el2KcdIspTYm4PAHvY1D8THKvAu8ZgrapvjuG25cL3ALoqRbsWduzYMa08TazffvvtIINQm9sqxVC1bGOlY71MPCVJOg1PglAKSfHVZKySs1N54fnggw/mblK72Ddv3pwkqPVB/iZ9+umn5yokO9a3uUuAa99N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" width={330} height={200} alt="placeholder" />
            <div className="text-gray-400 p-2 flex gap-2 items-center border-gray-400 border-t border-b">
              <div className="text-base">HTML</div>
              <div className="text-base">SCSS</div>
              <div className="text-base">Python</div>
              <div className="text-base">Flask</div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="text-white text-2xl font-medium">Chert Nodes</div>
              <div className="text-gray-400 text-base">Minecraft servers hosting</div>
              <div className="flex gap-4">
                <button className="py-2 px-4 text-base font-medium text-white border border-purple-400">{ 'Live <~>' }</button>
                <button className="py-2 px-4 text-base font-medium text-gray-400 border border-gray-400">{ 'Cached >=' }</button>
              </div>
            </div>
          </div>
          <div className="border-gray-400 border">
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAADICAYAAACOJqhiAAASIklEQVR4Xu2dS8gdRROGx61BXelC4yIKIdFFRCIxihAMSCAEL4gE8Ya4SCQqCF4iWQQimmQheHchgWgIIuIFNyKoCxGVBFEhKoK6MArqyuv2/6kDc5hTp2e6Z945+fJ1P2f38U3VdD018051T3fPGcePH/9fxQ8CEIAABFoJnIFQcnVAAAIQ6CaAUHKFQAACEIgQQCi5RCAAAQgglFwDEIAABDQCVJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfHDGgIQKIAAQllAkgkRAhDQCCCUGj+sIQCBAggglAUkmRAhAAGNAEKp8cMaAhAogABCWUCSCRECENAIIJQaP6whAIECCCCUBSSZECEAAY0AQqnxwxoCECiAAEJZQJIJEQIQ0AgglBo/rCEAgQIIIJQFJJkQIQABjQBCqfFrtf7++++r//77b/L/c889t7rgggtGOdMvv/xS/fHHHxNfZ555ZrV69epR/JqTL7/8cupr1apV1TnnnDOa7+XgqJkza+9ll102SrMXlbM///yz+umnn6ZtHKu9owSdmROEcsSEmtC899571RtvvDHndeXKldV1111XXX/99b1F0260d955Z+L3r7/+mvF99tlnT/xu2bJl0I1tbX799der999/P9jmm266adLmXEWzK34Dcskll1S33XbbhHGfn4mY5ezNN9+sTp48OWdq/m655ZZBObNcHTlypPrmm2/m/A5tb5/YSjwWoRwp6y+88EJ16NChqDcTtkcffTT5xrObYv/+/XMCGTrR3XffXd17773RNtQHpLbZRP7gwYOjVq/JjVzQgSZkBw4cCD4gQqc0AdqzZ08SA6tMH3744aBAet99cmZttjZ8+umnUSobN26sHn/88WwfcFEAIx+AUI4A1ITMV5EmiJdeeunE+4kTJ+aE7v7776/uuOOOzrObSD722GNzx9hNYL+ff/557ma0/z377LPRqEIiaYJ44YUXVnZD+mrF4nn11Vd7V8PRhizBARbffffdF4yxzlmIrTF46aWXOsXSqv/bb799Lt91zkLXQqpY2vXi82ICbtV+qL32v1deeWUJCOd3SoRSzOknn3xSPfDAA1MvbRVjqDJ8+eWXW7teoRvOxNV3g63r+NRTT83cQDERNpt77rlnps3moznGZed//vnnZyquVBEWkS7c3D8k7AHx0EMPVVdfffXMuUNsY+JjAtys+G6++eZq586dM5Vd32vBGmWC98wzz0zbZ+148sknZx5cQ66FhcPO5AQIpZjIG264YVrVxSoO65Ldeuut0zN2CY+vUp944onW7rpVSHfeeedMO956663Wbpdvc1el2KcdIspTYm4PAHvY1D8THKvAu8ZgrapvjuG25cL3ALoqRbsWduzYMa08TazffvvtIINQm9sqxVC1bGOlY71MPCVJOg1PglAKSfHVZKySs1N54fnggw/mblK72Ddv3pwkqPVB/iZ9+umn5yokO9a3uUuAa99N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" width={330} height={200} alt="placeholder" />
            <div className="text-gray-400 p-2 flex gap-2 items-center border-gray-400 border-t border-b">
              <div className="text-base">HTML</div>
              <div className="text-base">SCSS</div>
              <div className="text-base">Python</div>
              <div className="text-base">Flask</div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="text-white text-2xl font-medium">Chert Nodes</div>
              <div className="text-gray-400 text-base">Minecraft servers hosting</div>
              <div className="flex gap-4">
                <button className="py-2 px-4 text-base font-medium text-white border border-purple-400">{ 'Live <~>' }</button>
                <button className="py-2 px-4 text-base font-medium text-gray-400 border border-gray-400">{ 'Cached >=' }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-28">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>skills</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-14">
          <Image className="w-[349px] h-[282px]" src="/skills.png" alt="skills" width={349} height={282} />
          <div className="flex flex-wrap gap-4 justify-end w-[584px]">
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Languages</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>Typescript</div>
                  <div>Lua</div>
                  <div>Python</div>
                  <div>Javascript</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Databases</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>SQLite</div>
                  <div>PostgreSQL</div>
                  <div>Mongo</div>
                </div>
              </div>
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Other</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>EJS</div>
                  <div>SCSS</div>
                  <div>REST</div>
                  <div>Jinja</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Tools</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>VSCode</div>
                  <div>Neovim</div>
                  <div>Figma</div>
                  <div>XFCE</div>
                  <div>Git</div>
                  <div>Font Awesome</div>
                </div>
              </div>
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Frameworks</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>React</div>
                  <div>Vue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-28">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>about-me</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="mt-6 mb-6 text-gray-400 text-base leading-7">
          <p className="mb-6">I&apos;m Edward Guevarra, a seasoned full-stack web developer with nearly a decade of experience in the field. I&apos;ve had the privilege of working on a wide range of web projects. My expertise encompasses both front-end and back-end development, and I specialize in creating robust, user-friendly web applications.</p>
          <p className="mb-6">Throughout my career, I&apos;ve honed my skills and kept up with the ever-evolving web technologies and frameworks. I&apos;m passionate about translating creative ideas into functional websites and applications that not only meet but exceed my clients&apos; expectations.</p>
          <p className="mb-6">I look forward to discussing how I can contribute to your web development needs and create impactful online experiences.</p>
        </div>
        <button className="py-2 px-4 border-purple-400 border text-white text-base font-medium">{ 'Read More ->' }</button>
      </div>
      <div className="w-[1024px] m-auto mt-28 mb-36">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>contacts</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="mt-6 mb-6 text-gray-400 text-base w-1/2">I’m interested in different opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
          <div className="p-4 border-gray-400 border w-max">
            <div className="text-white text-base font-bold mb-4">Message me here</div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 flex items-center gap-3 text-base"><BsDiscord /> shizokura</div>
              <div className="text-gray-400 flex items-center gap-3 text-base"><MdEmail /> edwardguevarra2003@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;