import svgPaths from "./svg-bqhfkgiaql";
import imgMarcoKSchmidt from "./741b7dcd7e84cb472c84b74abaf138214a52d905.png";
import imgElenaRodriguez from "./6b8909924b33e00f9a336b50c0b826e06bd66e37.png";
import imgClinicLogo from "./5e00243b8ebd581355c8cc14a9f007acdc50efbf.png";

function Container1() {
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
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[normal]">Search appointments...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[10px] pt-[9px] px-[12px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(226,232,240,0.3)] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container1 />
      <Input />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <OverlayBorder />
    </div>
  );
}

function Container4() {
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
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center py-px relative shrink-0" data-name="Button:css-transform">
      <div className="flex items-center justify-center relative shrink-0 size-[32.3px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px]" data-name="Button">
      <Container5 />
      <div className="absolute bg-[#0ea5e9] right-[7.99px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function ButtonCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center py-px relative shrink-0" data-name="Button:css-transform">
      <div className="flex h-[34.2px] items-center justify-center relative shrink-0 w-[30.4px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #0369A1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px]" data-name="Button">
      <Container6 />
    </div>
  );
}

function ButtonCssTransform2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center py-px relative shrink-0" data-name="Button:css-transform">
      <div className="flex items-center justify-center relative shrink-0 size-[34.2px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pl-px pr-[1.01px] relative shrink-0" data-name="Container">
      <ButtonCssTransform />
      <ButtonCssTransform1 />
      <ButtonCssTransform2 />
    </div>
  );
}

function HeaderTopAppBarExecutionFromJson() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(248,250,252,0.7)] drop-shadow-[0px_20px_20px_rgba(23,28,31,0.06)] relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar (Execution from JSON)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Appointment Hub</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[432.97px]">
        <p className="leading-[24px] mb-0">Orchestrate patient care with precision. Monitor real-time</p>
        <p className="leading-[24px]">scheduling metrics and incoming consultation requests.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading1 />
        <Container8 />
      </div>
    </div>
  );
}

function SectionPageHeaderBranding() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(170.262deg, rgb(241, 245, 249) 0%, rgb(240, 249, 255) 100%)" }} data-name="Section - Page Header & Branding">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[33px] relative size-full">
          <div className="absolute bg-[rgba(186,230,253,0.2)] blur-[32px] bottom-[-79px] right-[-79px] rounded-[9999px] size-[256px]" data-name="Decorative element" />
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.3)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[36px] relative shrink-0 w-[34px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
        <g id="Overlay">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="36" rx="12" width="34" />
          <path d={svgPaths.p38a73300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[32.69px]">
        <p className="leading-[16px]">+12%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0f2fe] text-[14px] w-full">
        <p className="leading-[20px]">Total Bookings</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
        <p className="leading-[40px]">142</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Heading2 />
    </div>
  );
}

function TotalBookings() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" style={{ backgroundImage: "linear-gradient(143.723deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Total Bookings">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(12,74,110,0.1),0px_8px_10px_-6px_rgba(12,74,110,0.1)]" data-name="Total Bookings:shadow" />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Background">
          <rect fill="var(--fill-0, #E0F2FE)" height="36" rx="12" width="36" />
          <path d={svgPaths.p29f44320} fill="var(--fill-0, #0369A1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Completed</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] w-full">
        <p className="leading-[40px]">89</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container14 />
        <Heading3 />
      </div>
    </div>
  );
}

function Completed() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Completed">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="h-[37px] relative shrink-0 w-[35px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 37">
        <g id="Background">
          <rect fill="var(--fill-0, #FFEDD5)" height="37" rx="12" width="35" />
          <path d={svgPaths.p12991ba0} fill="var(--fill-0, #C2410C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Pending</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] w-full">
        <p className="leading-[40px]">42</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container17 />
        <Heading4 />
      </div>
    </div>
  );
}

function Pending() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-3 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Pending">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Background">
          <rect fill="var(--fill-0, #FEE2E2)" height="36" rx="12" width="36" />
          <path d={svgPaths.p27dfcd00} fill="var(--fill-0, #B91C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Cancelled</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] w-full">
        <p className="leading-[40px]">11</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container20 />
        <Heading5 />
      </div>
    </div>
  );
}

function Cancelled() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] col-4 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Cancelled">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function StatusBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_166px] relative shrink-0 w-full" data-name="Status Bento Grid">
      <TotalBookings />
      <Completed />
      <Pending />
      <Cancelled />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-[185.75px]">
        <p className="leading-[28px]">Schedule Overview</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #1A1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-[107.36px]">
          <p className="leading-[24px]">October 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #1A1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Container24 />
      <Button4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading6 />
        <Container22 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[33.02px]">
        <p className="leading-[16px]">Mon</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[27.63px]">
        <p className="leading-[16px]">Tue</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[31.78px]">
        <p className="leading-[16px]">Wed</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[29.31px]">
        <p className="leading-[16px]">Thu</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[21.81px]">
        <p className="leading-[16px]">Fri</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[26.89px]">
        <p className="leading-[16px]">Sat</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch py-[8px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[1.2px] uppercase w-[29.36px]">
        <p className="leading-[16px]">Sun</p>
      </div>
    </div>
  );
}

function SampleCalendarDays() {
  return (
    <div className="col-1 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Sample Calendar Days">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[17.3px]">
          <p className="leading-[20px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-2 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[17.69px]">
          <p className="leading-[20px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="col-3 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[16.8px]">
          <p className="leading-[20px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="col-5 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[17.97px]">
          <p className="leading-[20px]">02</p>
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="col-6 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[18.16px]">
          <p className="leading-[20px]">03</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] col-7 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[18.56px]">
          <p className="leading-[20px]">04</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(240,249,255,0.3)] col-4 h-[96px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#bae6fd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[9px] not-italic text-[#0369a1] text-[14px] top-[18.5px] w-[15.16px]">
        <p className="leading-[20px]">01</p>
      </div>
      <div className="absolute bg-[#0ea5e9] h-[6px] left-[9px] rounded-[9999px] top-[37px] w-[32px]" data-name="Background" />
      <div className="absolute bg-[#7dd3fc] h-[6px] left-[9px] rounded-[9999px] top-[47px] w-[48px]" data-name="Background" />
    </div>
  );
}

function CalendarGridSimplifiedVisual() {
  return (
    <div className="relative shrink-0 w-full" data-name="Calendar Grid (Simplified Visual)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[__32px_96px] relative size-full">
        <Container26 />
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <SampleCalendarDays />
        <Border />
        <Border1 />
        <Border2 />
        <Border3 />
        <OverlayBorder1 />
        <OverlayBorder2 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <Container21 />
        <CalendarGridSimplifiedVisual />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
          <p className="leading-[28px]">Appointment Requests</p>
        </div>
      </div>
    </div>
  );
}

function MarcoKSchmidt() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Marco K. Schmidt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarcoKSchmidt} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <MarcoKSchmidt />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[137.09px]">
        <p className="leading-[24px]">Marco K. Schmidt</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[207.59px]">
        <p className="leading-[16px]">General Checkup • Oct 14, 10:30 AM</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207.59px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background3 />
        <Container35 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container39 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0369a1] content-stretch flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[57.42px]">
        <p className="leading-[20px]">Approve</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start relative size-full">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Request() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[16px] shrink-0 w-full" data-name="Request 1">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container34 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function ElenaRodriguez() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Elena Rodriguez">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgElenaRodriguez} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <ElenaRodriguez />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[124.98px]">
        <p className="leading-[24px]">Elena Rodriguez</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[236.81px]">
        <p className="leading-[16px]">Cardiology Consultation • Oct 14, 2:15 PM</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[236.81px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background4 />
        <Container41 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#0369a1] content-stretch flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[57.42px]">
        <p className="leading-[20px]">Approve</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start relative size-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Request1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[16px] shrink-0 w-full" data-name="Request 2">
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container40 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Request />
        <Request1 />
      </div>
    </div>
  );
}

function AppointmentRequestsList() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Appointment Requests List">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Heading7 />
        <Container33 />
      </div>
    </div>
  );
}

function ScheduleOverview8Columns() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[262.5px] relative row-1 self-start shrink-0" data-name="Schedule Overview (8 Columns)">
      <OverlayBorderShadowOverlayBlur />
      <AppointmentRequestsList />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Next Day Availability</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">Oct 15, 2023</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[24.95px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[117.72px]">
          <p className="leading-[20px] mb-0">09:00 AM - 10:00</p>
          <p className="leading-[20px]">AM</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#38bdf8] text-[12px] w-[52.66px]">
          <p className="leading-[16px]">Available</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[137.92px]">
          <p className="leading-[20px]">10:00 AM - 11:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[43.67px]">
          <p className="leading-[16px]">Booked</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] opacity-40 relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[17.01px] py-[17px] relative size-full">
          <Container51 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[136.56px]">
          <p className="leading-[20px]">11:00 AM - 12:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#38bdf8] text-[12px] w-[52.66px]">
          <p className="leading-[16px]">Available</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[142.08px]">
          <p className="leading-[20px]">01:00 PM - 02:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#38bdf8] text-[12px] w-[52.66px]">
          <p className="leading-[16px]">Available</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder3 />
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-center w-[167.44px]">
        <p className="leading-[24px]">Manage Full Calendar</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container47 />
      <Container48 />
      <Button9 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
          <div className="absolute bg-[rgba(14,165,233,0.2)] blur-[32px] right-[-39.99px] rounded-[9999px] size-[160px] top-[-40px]" data-name="Abstract glow" />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
          <p className="leading-[28px]">Clinical Insights</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c4a6e] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`"Peak booking times are`}</p>
        <p className="leading-[22.75px] mb-0">currently between 9 AM</p>
        <p className="leading-[22.75px] mb-0">and 11 AM. Consider</p>
        <p className="leading-[22.75px] mb-0">opening an additional</p>
        <p className="leading-[22.75px] mb-0">consultation room during</p>
        <p className="leading-[22.75px]">{`these hours."`}</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p27114680} fill="var(--fill-0, #0284C7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[12px] tracking-[1.2px] uppercase w-[144.77px]">
        <p className="leading-[16px]">Smart Suggestion</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(240,249,255,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[22.875px] px-[24px] relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function ClinicalInsightsCard() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Clinical Insights Card">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <Heading9 />
        <Overlay2 />
      </div>
    </div>
  );
}

function AvailabilityWidget4Columns() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Availability Widget (4 Columns)">
      <BackgroundShadow />
      <ClinicalInsightsCard />
    </div>
  );
}

function MainInteractiveSection() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_882.50px] relative shrink-0 w-full" data-name="Main Interactive Section">
      <ScheduleOverview8Columns />
      <AvailabilityWidget4Columns />
    </div>
  );
}

function ContentPage() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content Page">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <SectionPageHeaderBranding />
        <StatusBentoGrid />
        <MainInteractiveSection />
      </div>
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[1493px] relative shrink-0 w-full" data-name="Main Canvas">
      <HeaderTopAppBarExecutionFromJson />
      <ContentPage />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Clinical Sanctuary</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Precision Data Engine</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Heading />
        <Container62 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
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

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container63 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[71.48px]">
            <p className="leading-[20px]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container64() {
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

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container64 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[56.47px]">
            <p className="leading-[20px]">Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container65() {
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

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container65 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[52.03px]">
            <p className="leading-[20px]">Doctors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container66 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[55.17px]">
            <p className="leading-[20px]">Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p14637a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkActiveNavigationLogicAppointments() {
  return (
    <div className="bg-gradient-to-r from-[#0369a1] relative rounded-[12px] shrink-0 to-[#0ea5e9] w-full" data-name="Link - Active Navigation Logic: Appointments">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(12,74,110,0.2),0px_4px_6px_-4px_rgba(12,74,110,0.2)]" data-name="Link - Active Navigation Logic: Appointments:shadow" />
          <Container67 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[93.72px]">
            <p className="leading-[20px]">Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container68() {
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

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container68 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[47.27px]">
            <p className="leading-[20px]">Guards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container69() {
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

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container69 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[108.63px]">
            <p className="leading-[20px]">Announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container70() {
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

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container70 />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[55.55px]">
            <p className="leading-[20px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <LinkActiveNavigationLogicAppointments />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function ClinicLogo() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Clinic Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClinicLogo} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <ClinicLogo />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[90.31px]">
        <p className="leading-[16px]">Dr. Arcio Admin</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[68px]">
        <p className="leading-[15px]">Superuser</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[90.31px]" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background5 />
        <Container72 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(241,245,249,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-[74px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[883px] relative size-full">
          <OverlayBorderOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function AsideSideNavBarExecutionFromJson() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(241,245,249,0.8)] h-[1493px] left-0 top-0 w-[256px] hidden" data-name="Aside - SideNavBar (Execution from JSON)">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[16px] pr-[17px] py-[16px] relative rounded-[inherit] size-full">
        <Margin />
        <Nav />
        <Margin1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ArcioAppointmentsRedesigned() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Arcio Appointments (Redesigned)">
      <MainCanvas />
      <AsideSideNavBarExecutionFromJson />
    </div>
  );
}

