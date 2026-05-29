import svgPaths from "./svg-kcsg8fxonn";
import imgPatientAvatar from "./6f99cc81f1bf64655793d9042406c902162ea2b9.png";
import imgPatientAvatar1 from "./f85319c223ac5f3190d5fef64371f813ff6621ce.png";
import imgPatientAvatar2 from "./39e7b44d330589537fdc46a281b9838464c3a8ee.png";
import imgRecent from "./a024c68f7b9f2edfa5dfc93888d9bf86e9e4c126.png";
import imgRecent1 from "./4a9b4c206df7ebf8dea76119a40c294441ff717e.png";
import imgRecent2 from "./64fe92f18b33b24aa59222d390c2d79ef0f2442c.png";
import imgClinicBrand from "./ea745e779065b17d2ed3d06dd8c62e5f41bd2c94.png";
import imgUserAvatar from "./f5cd50f4b4d9777c634054a0225ac1c867868ff5.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search medical records...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start justify-center overflow-clip pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p210dd580} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-[12px] top-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container6 />
      <div className="absolute bg-[#ba1a1a] right-[7.99px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p33ced450} fill="var(--fill-0, #0369A1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(248,250,252,0.7)] drop-shadow-[0px_20px_20px_rgba(23,28,31,0.06)] relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[16px] relative size-full">
          <Container />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[28px] tracking-[-0.6px] w-[333.11px]">
        <p className="leading-[40px]">Patients Repository</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[561.14px]">
        <p className="leading-[24px]">Manage and monitor comprehensive clinical records with Arcio Precision.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[561.14px]" data-name="Container">
      <Heading1 />
      <Container10 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Hero Section">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[-16px] h-[64px] right-[-16px] w-[128px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 64">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p22b62e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Total Patients</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[36px]">1,482</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Container">
          <path d={svgPaths.p313692c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[116.3px]">
        <p className="leading-[16px]">12% from last month</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Container13 />
      <Container14 />
    </div>
  );
}

function StatCard() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" style={{ backgroundImage: "linear-gradient(143.213deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Stat Card 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pb-[42px] pt-[24px] px-[24px] relative size-full">
          <Container11 />
          <Container12 />
          <Heading2 />
          <Overlay />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.pe7a2f00} fill="var(--fill-0, #0284C7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#e0f2fe] content-stretch flex items-center justify-center left-[25px] rounded-[8px] size-[40px] top-[25px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[103.91px]">
        <p className="leading-[20px]">New This Week</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[105px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[30px] w-[36.13px]">
        <p className="leading-[36px]">42</p>
      </div>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-2 h-[166px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Stat Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Background />
      <Container16 />
      <Heading3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pd0beb00} fill="var(--fill-0, #0284C7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#e0f2fe] content-stretch flex items-center justify-center left-[25px] rounded-[8px] size-[40px] top-[25px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[119.14px]">
        <p className="leading-[20px]">Scheduled Exams</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[105px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[30px] w-[49.39px]">
        <p className="leading-[36px]">128</p>
      </div>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-3 h-[166px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Stat Card 3">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Background1 />
      <Container18 />
      <Heading4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3b22eb80} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex items-center justify-center left-[25px] rounded-[8px] size-[40px] top-[25px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[96.61px]">
        <p className="leading-[20px]">Recovery Rate</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[105px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[30px] w-[63.92px]">
        <p className="leading-[36px]">94%</p>
      </div>
    </div>
  );
}

function StatCard3() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-4 h-[166px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Stat Card 4">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Background2 />
      <Container20 />
      <Heading5 />
    </div>
  );
}

function SectionStatsBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_166px] relative shrink-0 w-full" data-name="Section - Stats Bento Grid">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
      <StatCard3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[20px] w-[231.36px]">
        <p className="leading-[28px]">Active Patient Directory</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7">
        <g id="Container">
          <path d={svgPaths.p3592ed80} fill="var(--fill-0, #171C1F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#eaeef2] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[11.083px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 11.6667">
        <g id="Container">
          <path d={svgPaths.p133c0080} fill="var(--fill-0, #171C1F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#eaeef2] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Heading6 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function PatientAvatar() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_0px_0px_4px_#f0f9ff] shrink-0 size-[56px]" data-name="Patient Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatientAvatar} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[18px] w-[130.31px]">
        <p className="leading-[28px]">Julian Jamison</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[280px]">
        <p className="leading-[20px]">Patient ID: #AR-9022 • Hypertension Care</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Container">
      <Heading7 />
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <PatientAvatar />
        <Container27 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[77.17px]">
        <p className="leading-[16px]">Last Visit</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] text-right w-[88.05px]">
        <p className="leading-[20px]">Oct 24, 2023</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.05px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[10px] tracking-[-0.5px] uppercase w-[34.75px]">
        <p className="leading-[15px]">Stable</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container34 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Button5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.99px] items-center relative size-full">
        <Container30 />
        <Container33 />
      </div>
    </div>
  );
}

function PatientItem() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Patient Item 1">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container26 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function PatientAvatar1() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_0px_0px_4px_#f0f9ff] shrink-0 size-[56px]" data-name="Patient Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatientAvatar1} />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[18px] w-[110.75px]">
        <p className="leading-[28px]">Elena Gilbert</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[208.02px]">
        <p className="leading-[20px] mb-0">Patient ID: #AR-4412 • Post-Op</p>
        <p className="leading-[20px]">Recovery</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[208.02px]" data-name="Container">
      <Heading8 />
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <PatientAvatar1 />
        <Container36 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[77.17px]">
        <p className="leading-[16px]">Last Visit</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] text-right w-[49.29px]">
        <p className="leading-[20px] mb-0">Oct 22,</p>
        <p className="leading-[20px]">2023</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[77.17px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[-0.5px] uppercase w-[55.89px]">
        <p className="leading-[15px]">Recovered</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background4 />
      <Button6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.99px] items-center relative size-full">
        <Container39 />
        <Container42 />
      </div>
    </div>
  );
}

function PatientItem1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Patient Item 2">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container35 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function PatientAvatar2() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_0px_0px_4px_#f0f9ff] shrink-0 size-[56px]" data-name="Patient Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatientAvatar2} />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[18px] w-[128.42px]">
        <p className="leading-[28px]">Markus Wright</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[199.55px]">
        <p className="leading-[20px] mb-0">Patient ID: #AR-1156 • Routine</p>
        <p className="leading-[20px]">Checkup</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[199.55px]" data-name="Container">
      <Heading9 />
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <PatientAvatar2 />
        <Container45 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[77.17px]">
        <p className="leading-[16px]">Last Visit</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] text-right w-[46.5px]">
        <p className="leading-[20px] mb-0">Oct 21,</p>
        <p className="leading-[20px]">2023</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[77.17px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[10px] tracking-[-0.5px] uppercase w-[65.25px]">
        <p className="leading-[15px]">Observation</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container52 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Button7 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container48 />
        <Container51 />
      </div>
    </div>
  );
}

function PatientItem2() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Patient Item 3">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container44 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PatientItem />
      <PatientItem1 />
      <PatientItem2 />
    </div>
  );
}

function PatientsListColumn() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[170px] relative row-1 self-start shrink-0" data-name="Patients List Column">
      <Container21 />
      <Container25 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[16px] w-[122.11px]">
        <p className="leading-[24px]">Recently Added</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[2.333px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 2.33333">
        <g id="Container">
          <path d={svgPaths.p30335600} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading10 />
        <Container54 />
      </div>
    </div>
  );
}

function Recent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Recent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRecent} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Recent />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[92.77px]">
        <p className="leading-[20px]">Sarah Connor</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[148.11px]">
        <p className="leading-[15px]">Added 2 hours ago by Dr. Arcio</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.11px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="bg-[#0ea5e9] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[12.563px] relative size-full">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Recent1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Recent 1">
      <Background6 />
      <Container56 />
      <Margin />
    </div>
  );
}

function Recent3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Recent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRecent1} />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Recent3 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[78.44px]">
        <p className="leading-[20px]">Leo Davinci</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[155.52px]">
        <p className="leading-[15px]">Added 5 hours ago by Nurse Joy</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155.52px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="bg-[#cbd5e1] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[5.156px] relative size-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Recent2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Recent 2">
      <Background7 />
      <Container60 />
      <Margin1 />
    </div>
  );
}

function Recent5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Recent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRecent2} />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Recent5 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[85.3px]">
        <p className="leading-[20px]">Diana Prince</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[140.27px]">
        <p className="leading-[15px]">Added yesterday by Dr. Smith</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140.27px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="bg-[#cbd5e1] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[20.406px] relative size-full">
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Recent4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Recent 3">
      <Background8 />
      <Container64 />
      <Margin2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[8px] relative size-full">
        <Recent1 />
        <Recent2 />
        <Recent4 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center tracking-[1.2px] uppercase w-[175.61px]">
          <p className="leading-[16px]">View Registration Log</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container53 />
        <Container55 />
        <Button8 />
      </div>
    </div>
  );
}

function ClinicBrand() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Clinic Brand">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[155.56%] left-0 max-w-none top-[-27.78%] w-full" src={imgClinicBrand} />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#38bdf8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Clinic Sanctuary</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[22.5px] mb-0">Empowering Clinical</p>
        <p className="leading-[22.5px]">Precision through Data.</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#1a1a1a] inset-0 items-start justify-end p-[24px] to-[rgba(26,26,26,0)]" data-name="Background">
      <Margin3 />
      <Heading11 />
    </div>
  );
}

function BrandingCard() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[192px] items-start justify-center overflow-clip relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Branding Card">
      <ClinicBrand />
      <Background9 />
    </div>
  );
}

function RecentlyAddedSidebar() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Recently Added Sidebar">
      <OverlayBorderOverlayBlur />
      <BrandingCard />
    </div>
  );
}

function MainLayoutListAndSidebar() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_580px] relative shrink-0 w-full" data-name="Main Layout: List and Sidebar">
      <PatientsListColumn />
      <RecentlyAddedSidebar />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
        <HeroSection />
        <SectionStatsBentoGrid />
        <MainLayoutListAndSidebar />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-screen pb-[6px] relative shrink-0 w-full" data-name="Main Content Area">
      <Container8 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Clinical Sanctuary</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[20px]">Precision Data Engine</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Heading />
        <Container70 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[73.02px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2cccbbb0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[58.33px]">
        <p className="leading-[20px]">Services</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container73 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p111d6a00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[52.69px]">
        <p className="leading-[20px]">Doctors</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container75 />
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p33f99400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[54.92px]">
        <p className="leading-[20px]">Patients</p>
      </div>
    </div>
  );
}

function LinkActiveStatePatients() {
  return (
    <div className="bg-gradient-to-r from-[#0369a1] relative rounded-[12px] shrink-0 to-[#0ea5e9] w-full" data-name="Link - Active State: Patients">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(12,74,110,0.2),0px_4px_6px_-4px_rgba(12,74,110,0.2)]" data-name="Link - Active State: Patients:shadow" />
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pdbf5c00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[93.67px]">
        <p className="leading-[20px]">Appointments</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2bdb86e0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[48.19px]">
        <p className="leading-[20px]">Guards</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[109.64px]">
        <p className="leading-[20px]">Announcements</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[54.92px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <LinkActiveStatePatients />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="max-w-[189px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="User Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[12px] w-[90.31px]">
        <p className="leading-[16px]">Dr. Arcio Admin</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[61.69px]">
        <p className="leading-[20px]">Super Admin</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90.31px]" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <UserAvatar />
        <Container88 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container87 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-h-[74px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[412px] relative size-full">
          <OverlayBorderOverlayBlur1 />
        </div>
      </div>
    </div>
  );
}

function AsideSidebarWrapper() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(241,245,249,0.8)] h-[1040px] left-0 top-0 w-[256px] hidden" data-name="Aside - Sidebar Wrapper">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[16px] pr-[17px] py-[16px] relative rounded-[inherit] size-full">
        <Margin4 />
        <Nav />
        <Margin5 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ArcioPatientsRedesigned() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start relative size-full min-h-screen" data-name="Arcio Patients (Redesigned)">
      <MainContentArea />
    </div>
  );
}
