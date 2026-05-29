import { useNavigate } from 'react-router';
import svgPaths from "./svg-ywrl7f8zzc";
import imgDataFlowVisualization from "./20f94b841d198d07803e1b85b6be2284f46991cc.png";
import imgDrArcioProfile from "./b26864f2ef9cc3aaf2837f4edc83b38714facd2a.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">CLINICAL PERFORMANCE</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[40px]">Services Overview</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[399.28px]" data-name="Container">
      <Container1 />
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex gap-[8px] items-center px-[25px] py-[11px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container3 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Filter</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex gap-[8px] items-center px-[25px] py-[11px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container4 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Report</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header">
      <Container />
      <Container2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21.25px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 21.25">
        <g id="Container">
          <path d={svgPaths.p27b6e600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container6 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(209,250,229,0.6)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OPTIMAL</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background />
      <Overlay />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[32px]">Pulmonologie</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Capacity Utilized</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">68%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute inset-[0_32%_0_0] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Gradient" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Overlay1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[76px] items-start justify-end min-h-[44px] pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function CardPulmonologie() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Card: Pulmonologie">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin />
        <Heading3Margin />
        <Margin1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p2082ed00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container12 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(209,250,229,0.6)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OPTIMAL</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Overlay2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[32px]">Hématologie</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Capacity Utilized</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">42%</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute inset-[0_58%_0_0] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Gradient" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Overlay3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[76px] items-start justify-end min-h-[44px] pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function CardHematologie() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Card: Hématologie">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin2 />
        <Heading3Margin1 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 25">
        <g id="Container">
          <path d={svgPaths.pcd65380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container18 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(254,243,199,0.6)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ACTIVE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background2 />
        <Overlay4 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[32px] mb-0">Gastro-</p>
        <p className="leading-[32px]">entérologie</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Capacity Utilized</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">85%</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#fbbf24] inset-[0_15%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Overlay5 />
    </div>
  );
}

function CardGastroEnterologie() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Card: Gastro-entérologie">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin4 />
        <Heading3Margin2 />
        <Container19 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22.938px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.9375">
        <g id="Container">
          <path d={svgPaths.p18969600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container24 />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(209,250,229,0.6)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OPTIMAL</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Overlay6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[32px]">Cardiologie</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Capacity Utilized</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">54%</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute inset-[0_46%_0_0] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Gradient" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Overlay7 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-end min-h-[44px] pt-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container25 />
    </div>
  );
}

function CardCardiologie() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Card: Cardiologie">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin5 />
        <Heading3Margin3 />
        <Margin6 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[25px] relative shrink-0 w-[23.765px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7647 25">
        <g id="Container">
          <path d={svgPaths.p3e054f80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container30 />
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(209,250,229,0.6)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OPTIMAL</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Overlay8 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[32px]">Neurologie</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading6 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Capacity Utilized</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">61%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute inset-[0_39%_0_0] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Gradient" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Overlay9 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-end min-h-[44px] pt-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container31 />
    </div>
  );
}

function CardNeurologie() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Card: Neurologie">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin7 />
        <Heading3Margin4 />
        <Margin8 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Container">
          <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container35 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[80px] relative shrink-0 w-[56px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Border />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Add Service</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">NEW MEDICAL UNIT</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function AddServiceWidget() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate('/admin/add-service')}
      className="backdrop-blur-[6px] bg-[rgba(226,232,240,0.2)] col-2 justify-self-stretch min-h-[300px] relative rounded-[16px] row-2 self-start shrink-0 cursor-pointer hover:bg-[rgba(226,232,240,0.4)] transition-all group" 
      data-name="Add Service Widget"
    >
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[34px] py-[84.5px] relative size-full">
          <div className="size-14 border-2 border-[#cbd5e1] border-solid rounded-full flex items-center justify-center text-[#94a3b8] group-hover:text-[#006591] group-hover:scale-110 transition-all mb-4">
             <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className="font-bold text-[#64748b] text-xl">Add Service</div>
          <div className="text-[10px] text-[rgba(100,116,139,0.6)] tracking-[2px] uppercase mt-2">EXPAND OFFERINGS</div>
        </div>
      </div>
    </div>
  );
}

function CallToActionCard() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate('/admin/add-department')}
      className="backdrop-blur-[6px] bg-[rgba(226,232,240,0.2)] col-3 justify-self-stretch min-h-[300px] relative rounded-[16px] row-2 self-start shrink-0 cursor-pointer hover:bg-[rgba(226,232,240,0.4)] transition-all group" 
      data-name="Call to action card"
    >
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[34px] py-[84.5px] relative size-full">
          <div className="size-14 border-2 border-[#cbd5e1] border-solid rounded-full flex items-center justify-center text-[#94a3b8] group-hover:text-[#006591] group-hover:scale-110 transition-all mb-4">
             <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </div>
          <div className="font-bold text-[#64748b] text-xl">Add Department</div>
          <div className="text-[10px] text-[rgba(100,116,139,0.6)] tracking-[2px] uppercase mt-2">NEW MEDICAL UNIT</div>
        </div>
      </div>
    </div>
  );
}

function DepartmentalCardsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_292px_300px_300px] relative shrink-0 w-full" data-name="Departmental Cards Grid">
      <CardPulmonologie />
      <CardHematologie />
      <CardGastroEnterologie />
      <CardCardiologie />
      <CardNeurologie />
      <CallToActionCard />
      <div className="col-1 row-3">
        <AddServiceWidget />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Global Clinical Engine</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#059669] rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Live Systems</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <div className="bg-[rgba(203,213,225,0.3)] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
      <Container38 />
    </div>
  );
}

function DataFlowVisualization() {
  return (
    <div className="h-[144px] mix-blend-overlay opacity-60 relative shrink-0 w-full" data-name="Data Flow Visualization">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDataFlowVisualization} />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Container" opacity="0.4">
          <path d={svgPaths.p37337de0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container41 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="aspect-square content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(2,132,199,0.2)] shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background+Shadow">
      <DataFlowVisualization />
      <Container40 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">REAL-TIME INSIGHT</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Margin">
      <Container43 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="leading-[30px] mb-0">Predictive</p>
        <p className="leading-[30px]">Patient Flow</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 4:margin">
      <Heading9 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[-1.13px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(100,116,139,0.8)] whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Our engine analyzes</p>
        <p className="leading-[22.75px] mb-0">departmental throughput to</p>
        <p className="leading-[22.75px] mb-0">predict potential</p>
        <p className="leading-[22.75px] mb-0">bottlenecks up to 24 hours</p>
        <p className="leading-[22.75px] mb-0">in advance with 98.4%</p>
        <p className="leading-[22.75px]">accuracy.</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="h-[168.5px] relative shrink-0 w-full" data-name="Margin">
      <Container44 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">LATENCY</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[32px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center left-0 text-[#1a1a1a] text-[24px] top-[15.5px]">
        <p className="leading-[32px]">12</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center left-[28.81px] text-[#64748b] text-[14px] top-[19.5px]">
        <p className="leading-[20px]">ms</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[54.31px]" data-name="Container">
      <Container47 />
      <Paragraph />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DATA POINTS</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center left-0 text-[#1a1a1a] text-[24px] top-[15.5px]">
        <p className="leading-[32px]">1.2</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center left-[35.14px] text-[#64748b] text-[14px] top-[19.5px]">
        <p className="leading-[20px]">M/s</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[77.78px]" data-name="Container">
      <Container49 />
      <Paragraph1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[48px] h-[51px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container48 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[184px]" data-name="Container">
      <Margin11 />
      <Heading4Margin />
      <Margin12 />
      <Container45 />
    </div>
  );
}

function PredictiveAnalyticsCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-1 h-[402.5px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Predictive Analytics Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[40px] relative size-full">
          <BackgroundShadow />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">SYSTEM HEALTH</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">
        <p className="leading-[30px]">Clinical Nodes</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[169.41px]" data-name="Container">
      <Container52 />
      <Heading10 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[11px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,101,145,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DIAGNOSTICS</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Button2 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container50 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Node Alpha-9</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">STANDARD OPERATION</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131.5px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[16px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">99.9% Uptime</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container54 />
          <Background5 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Node Beta-4</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OPTIMIZED LOAD</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[98.02px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[16px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">100.0% Uptime</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[16.99px] py-[17px] relative size-full">
          <Container59 />
          <Background6 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p5f98840} fill="var(--fill-0, #0EA5E9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Primary Router</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">REDUNDANT SWITCH ACTIVE</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[166.8px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[16px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">98.2% Uptime</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container64 />
          <Background7 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[2.5px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
    </div>
  );
}

function SystemHealthSummary() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="System Health Summary">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Margin13 />
        <Container53 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_402.50px] relative shrink-0 w-full" data-name="Container">
      <PredictiveAnalyticsCard />
      <SystemHealthSummary />
    </div>
  );
}

function GlobalClinicalEngineSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[40px] relative shrink-0 w-full" data-name="Global Clinical Engine Section">
      <Container37 />
      <Container39 />
    </div>
  );
}

function MainContentAreaContentCanvas() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Main Content Area → Content Canvas">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] pb-[80px] pt-[128px] px-[40px] relative size-full">
        <PageHeader />
        <DepartmentalCardsGrid />
        <GlobalClinicalEngineSection />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(100,116,139,0.4)] w-full">
        <p className="leading-[normal]">Search departments or analytics...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] content-stretch flex items-start justify-center overflow-clip pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative rounded-[9999px] shrink-0 w-[288px]" data-name="Input">
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #64748B)" fillOpacity="0.6" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container72 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[32px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 36">
        <g id="Button">
          <path d={svgPaths.p121cc980} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Button">
          <path d={svgPaths.p51a7700} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Dr. Arcio</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">Administrator</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64.64px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function DrArcioProfile() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Dr. Arcio Profile">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDrArcioProfile} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container76 />
      <DrArcioProfile />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container74 />
        <div className="bg-[rgba(203,213,225,0.3)] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
        <Container75 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.6)] content-stretch flex h-[80px] items-center justify-between left-[288px] pb-px px-[40px] top-0 w-[992px]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Container69 />
      <Container73 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p196670c8} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.2),0px_4px_6px_-4px_rgba(2,132,199,0.2)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <Container80 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ARCIO CLINICAL</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(100,116,139,0.6)] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[15px]">Departmental Capacity</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[123.63px]" data-name="Container">
      <Heading />
      <Container82 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[32px] relative size-full">
          <Background8 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p20a2f200} fill="var(--fill-0, #006591)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Services</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(224,242,254,0.4)] relative rounded-bl-[32px] rounded-tl-[32px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006591] border-r-3 border-solid inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[19px] py-[12px] relative size-full">
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p111d6a00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Doctors</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container87 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Patients</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container89 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pd0beb00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Appointments</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container91 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Schedule</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container93 />
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Announcements</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container95 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container97 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function NavMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative rounded-[48px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(137.121deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.2),0px_4px_6px_-4px_rgba(2,132,199,0.2)]" data-name="Button:shadow" />
      <Container100 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Add New Service</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Support</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="opacity-80 relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[12px] pt-[32px] px-[16px] relative size-full">
          <Container101 />
          <Container102 />
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #1A1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sign Out</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container103 />
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <Button5 />
        <Link8 />
        <Link9 />
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container99 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col h-[1482px] items-start left-0 pr-px py-[32px] top-0 w-[288px] hidden" data-name="Aside - SideNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1482px] left-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[288px] hidden" data-name="Aside - SideNavBar:shadow" />
      <Margin14 />
      <NavMargin />
      <Margin15 />
    </div>
  );
}

export default function Services() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full min-h-screen" style={{ backgroundImage: "linear-gradient(90deg, rgb(241, 245, 249) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="services">
      <MainContentAreaContentCanvas />
    </div>
  );
}
