import svgPaths from "./svg-8z7c4867aa";
import imgAccountCircle from "./0451c2026263616c0d537799cc29de3ad82d5750.png";
import imgClinicLogo from "./634c264d1793a35ca2abfaccbe62de1de1d4811e.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search patient data, reports...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-w-px relative" data-name="Container">
      <Input />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[192.39px] relative size-full">
          <Container1 />
        </div>
      </div>
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
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[12px]" data-name="Button">
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
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[12px]" data-name="Button">
      <Container6 />
      <div className="absolute bg-[#ba1a1a] right-[7.99px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[112.03px] px-[8px] top-[8px] w-[17px]" data-name="Margin">
      <div className="bg-[#e2e8f0] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] text-right w-[105.36px]">
        <p className="leading-[20px]">Dr. Arcio Admin</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-right uppercase w-[114.58px]">
        <p className="leading-[15px]">Senior Clinical Lead</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114.58px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="account_circle">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAccountCircle} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0f2fe] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[145.03px] p-[4px] rounded-[12px] top-1/2" data-name="Container">
      <Container8 />
      <AccountCircle />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[319.61px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-px size-[32.3px] top-1/2" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[34.2px] items-center justify-center left-[57.02px] top-1/2 w-[30.4px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button1 />
        </div>
      </div>
      <Margin />
      <Container7 />
    </div>
  );
}

function HeaderTopAppBarComponent() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(248,250,252,0.7)] drop-shadow-[0px_20px_20px_rgba(23,28,31,0.06)] relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar Component">
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
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Clinical Sanctuary Overview</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[16px] w-full">
        <p className="leading-[24px]">Real-time performance metrics and diagnostic insights.</p>
      </div>
    </div>
  );
}

function SectionWelcomeHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Section - Welcome Header">
      <Heading1 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[0.7px] uppercase w-[73.89px]">
        <p className="leading-[20px] mb-0">Total</p>
        <p className="leading-[20px]">Doctors</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[28px] w-[43.03px]">
        <p className="leading-[40px]">23</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[73.89px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container13 />
        <Heading2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p111d6a00} fill="var(--fill-0, #0369A1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0f2fe] h-[56px] relative rounded-[16px] shrink-0 w-[52.67px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[25px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
          <div className="flex-none scale-x-125 scale-y-125">
            <Container14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TotalDoctors() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(240,244,248,0.7)] col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[134px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Total Doctors">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container12 />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[0.7px] uppercase w-[73px]">
        <p className="leading-[20px] mb-0">Total</p>
        <p className="leading-[20px]">Patients</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[28px] w-[43.03px]">
        <p className="leading-[40px]">23</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container16 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #0F766E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ccfbf1] h-[56px] relative rounded-[16px] shrink-0 w-[52.94px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[27.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
          <div className="flex-none scale-x-125 scale-y-125">
            <Container17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TotalPatients() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(240,244,248,0.7)] col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[134px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Total Patients">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container15 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-[121.48px]">
        <p className="leading-[20px] mb-0">Appointments</p>
        <p className="leading-[20px]">Today</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-[43.03px]">
        <p className="leading-[40px]">23</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[121.48px]" data-name="Container">
      <Container19 />
      <Heading4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex h-[56px] items-center justify-center relative rounded-[16px] shrink-0 w-[41.75px]" data-name="Overlay+OverlayBlur">
      <div className="flex h-[25px] items-center justify-center relative shrink-0 w-[22.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
        <div className="flex-none scale-x-125 scale-y-125">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function AppointmentsToday() {
  return (
    <div className="col-3 h-[134px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Appointments Today">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(12,74,110,0.1),0px_4px_6px_-4px_rgba(12,74,110,0.1)]" data-name="Appointments Today:shadow" />
          <Container18 />
          <OverlayOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[0.7px] uppercase w-[121.05px]">
        <p className="leading-[20px] mb-0">New</p>
        <p className="leading-[20px]">Registrations</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[28px] w-[43.03px]">
        <p className="leading-[40px]">23</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[121.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container22 />
        <Heading5 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[16px] relative w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.pe7a2f00} fill="var(--fill-0, #4338CA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e0e7ff] h-[56px] relative rounded-[16px] shrink-0 w-[44.44px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[27.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" }}>
          <div className="flex-none scale-x-125 scale-y-125">
            <Container23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NewRegistrations() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(240,244,248,0.7)] col-4 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[134px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="New Registrations">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container21 />
          <Background2 />
        </div>
      </div>
    </div>
  );
}

function SectionMetricsBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_134px] relative shrink-0 w-full" data-name="Section - Metrics Bento Grid">
      <TotalDoctors />
      <TotalPatients />
      <AppointmentsToday />
      <NewRegistrations />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[20px] w-[213.14px]">
        <p className="leading-[28px]">Services Performance</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[14px] text-center w-[100.69px]">
        <p className="leading-[20px]">View Analytics</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading6 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="h-[35px] relative shrink-0 w-[37px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 35">
        <g id="Background">
          <rect fill="var(--fill-0, #F0F9FF)" height="35" rx="8" width="37" />
          <path d={svgPaths.p331af00} fill="var(--fill-0, #0284C7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] w-[43.75px]">
        <p className="leading-[16px]">+12.5%</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21.01px] top-[21px]" data-name="Container">
      <Background3 />
      <Background4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21.01px] top-[77px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[105.58px]">
        <p className="leading-[24px]">Pulmonologie</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21.01px] top-[101px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[183.53px]">
        <p className="leading-[16px]">Patient Throughput Optimization</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[21px] overflow-clip right-[21.01px] rounded-[9999px] top-[133px]" data-name="Background">
      <div className="absolute bg-[#0ea5e9] inset-[0_15%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white col-1 h-[160px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container26 />
      <Heading7 />
      <Container27 />
      <Background5 />
    </div>
  );
}

function Background6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[32px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 36">
        <g id="Background">
          <rect fill="var(--fill-0, #FFF1F2)" height="36" rx="8" width="32" />
          <path d={svgPaths.p1895300} fill="var(--fill-0, #E11D48)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] w-[38.86px]">
        <p className="leading-[16px]">+8.2%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21px] top-[21px]" data-name="Container">
      <Background6 />
      <Background7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[77px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[97.81px]">
        <p className="leading-[24px]">Hématologie</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[101px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[185.13px]">
        <p className="leading-[16px]">Laboratory Integration Efficiency</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[21px] overflow-clip right-[21px] rounded-[9999px] top-[133px]" data-name="Background">
      <div className="absolute bg-[#f43f5e] inset-[0_28%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white col-2 h-[160px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container28 />
      <Heading8 />
      <Container29 />
      <Background8 />
    </div>
  );
}

function Background9() {
  return (
    <div className="h-[34px] relative shrink-0 w-[36px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 34">
        <g id="Background">
          <rect fill="var(--fill-0, #FFFBEB)" height="34" rx="8" width="36" />
          <path d={svgPaths.p355b9140} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e11d48] text-[12px] w-[36.63px]">
        <p className="leading-[16px]">-2.4%</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21.01px] top-[21px]" data-name="Container">
      <Background9 />
      <Background10 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21.01px] top-[77px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[94.73px]">
        <p className="leading-[24px]">Néphrologie</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21.01px] top-[101px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[158.09px]">
        <p className="leading-[16px]">Dialysis Unit Resource Load</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[21px] overflow-clip right-[21.01px] rounded-[9999px] top-[133px]" data-name="Background">
      <div className="absolute bg-[#f59e0b] inset-[0_55%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white col-1 h-[160px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container30 />
      <Heading9 />
      <Container31 />
      <Background11 />
    </div>
  );
}

function Background12() {
  return (
    <div className="h-[36.5px] relative shrink-0 w-[36px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36.5">
        <g id="Background">
          <rect fill="var(--fill-0, #EEF2FF)" height="36.5" rx="8" width="36" />
          <path d={svgPaths.p2293260} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] w-[44.05px]">
        <p className="leading-[16px]">+18.0%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21px] top-[21px]" data-name="Container">
      <Background12 />
      <Background13 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[77px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[146.34px]">
        <p className="leading-[24px]">Gastro-entérologie</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[101px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[161.7px]">
        <p className="leading-[16px]">Endoscopy Suite Scheduling</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[21px] overflow-clip right-[21px] rounded-[9999px] top-[133px]" data-name="Background">
      <div className="absolute bg-[#6366f1] inset-[0_9%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white col-2 h-[160px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container32 />
      <Heading10 />
      <Container33 />
      <Background14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__160px_160px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function ServicesPerformanceSection() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[129.75px] relative row-1 self-start shrink-0" data-name="Services Performance Section">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[20px] w-full">
        <p className="leading-[28px]">AI Insights</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.012px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0118 20">
        <g id="Container">
          <path d={svgPaths.p2d6f5e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-0 rounded-[12px] size-[48px] top-0" data-name="Overlay+OverlayBlur">
      <Container35 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[64px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[187.48px]">
        <p className="leading-[30px] mb-0">Predictive</p>
        <p className="leading-[30px]">Diagnostic Alert</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.75px] right-0 top-[139px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[114px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f2fe] text-[14px] w-[234.19px]">
        <p className="leading-[22.75px] mb-0">System identified a 14% uptick in</p>
        <p className="leading-[22.75px] mb-0">respiratory anomalies across the</p>
        <p className="leading-[22.75px] mb-0">North Sector. Recommend</p>
        <p className="leading-[22.75px] mb-0">prophylactic resource allocation for</p>
        <p className="leading-[22.75px]">Pulmonology.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[253.75px] relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur1 />
      <Heading12 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #6EE7B7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[152.33px]">
        <p className="leading-[16px]">Model Confidence: 98.4%</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(0,0,0,0.1)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.99px] items-center p-[12px] relative size-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[16px] text-center w-[172.27px]">
        <p className="leading-[24px]">Generate Full Analysis</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur2 />
      <Button3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container37 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(12,74,110,0.4)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(138.211deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0.2)] blur-[32px] right-[-95.99px] rounded-[9999px] size-[256px] top-[-96px]" data-name="Decorative glow" />
          <Container34 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function AiDiagnosticInsightBlock() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start relative row-1 self-start shrink-0 w-[298.66px]" data-name="AI Diagnostic Insight Block">
      <Heading11 />
      <BackgroundShadow />
    </div>
  );
}

function SectionSecondaryLayoutPerformanceAndAiInsight() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_517.75px] relative shrink-0 w-full" data-name="Section - Secondary Layout: Performance and AI Insight">
      <ServicesPerformanceSection />
      <AiDiagnosticInsightBlock />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[20px] w-[152px]">
        <p className="leading-[28px]">Clinical Activity</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(226,232,240,0.5)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[59.39px]">
        <p className="leading-[16px]">LIVE FEED</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading13 />
        <Overlay />
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#0ea5e9] h-[9.14px] relative rounded-[9999px] shrink-0 w-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] h-[9.14px] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_#e0f2fe] top-0 w-[12px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
          <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background15 />
      <Margin2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[12px] w-[54.98px]">
        <p className="leading-[16px]">10:45 AM</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[238.28px]">
        <p className="leading-[20px]">Emergency Admission - Cardiology</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[293px]">
        <p className="leading-[16px]">Patient ID: ARC-9921 updated via Mobile Telemetry.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <Container45 />
      <Heading14 />
      <Container46 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#14b8a6] h-[9.14px] relative rounded-[9999px] shrink-0 w-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] h-[9.14px] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_#ccfbf1] top-0 w-[12px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
          <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background16 />
      <Margin3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[12px] w-[54.8px]">
        <p className="leading-[16px]">09:12 AM</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[179.8px]">
        <p className="leading-[20px]">Lab Report Sync Complete</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[339.36px]">
        <p className="leading-[16px]">23 new hematology profiles matched with patient registries.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <Container50 />
      <Heading15 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_#fef3c7] size-[12px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background17 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[12px] w-[58.08px]">
        <p className="leading-[16px]">08:00 AM</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-[166.14px]">
        <p className="leading-[20px]">System Backup Success</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[346.42px]">
        <p className="leading-[16px]">Vault 7 encrypted and replicated to secondary clinical nodes.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <Container55 />
      <Heading16 />
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[16px] h-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container42 />
        <Container47 />
        <Container52 />
      </div>
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(240,244,248,0.7)] col-[1/span_2] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Activity Feed">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #0284C7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative size-full">
        <Container57 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[107.69px]">
          <p className="leading-[24px]">Quick Actions</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center uppercase w-[68.05px]">
          <p className="leading-[15px]">New Patient</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[8px] items-center justify-center justify-self-start px-[25.14px] py-[17px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center uppercase w-[39.84px]">
          <p className="leading-[15px]">Report</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[8px] items-center justify-center justify-self-start pl-[39.23px] pr-[39.26px] py-[17px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_81px] relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading17 />
        <Container58 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Compliance Shield</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px] mb-0">{`Arcio Clinical is fully HIPAA & GDPR`}</p>
        <p className="leading-[16px]">compliant.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[7.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#34d399] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[10px] w-[111.95px]">
        <p className="leading-[15px]">ALL SYSTEMS SECURE</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bottom-[-0.5px] h-[112px] right-[0.02px] w-[96px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 112">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p3dea8f40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#0f172a] relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Heading18 />
          <Container63 />
          <Container64 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function AuxiliaryActionColumn() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[40px] relative row-1 self-start shrink-0" data-name="Auxiliary Action Column">
      <OverlayBorder />
      <Background18 />
    </div>
  );
}

function SectionActivityFeedFinalRail() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_374px] pb-[48px] relative shrink-0 w-full" data-name="Section - Activity Feed & Final Rail">
      <ActivityFeed />
      <AuxiliaryActionColumn />
    </div>
  );
}

function DashboardCanvas() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Dashboard Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <SectionWelcomeHeader />
        <SectionMetricsBentoGrid />
        <SectionSecondaryLayoutPerformanceAndAiInsight />
        <SectionActivityFeedFinalRail />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-screen relative shrink-0 w-full" data-name="Main Content Area">
      <DashboardCanvas />
    </div>
  );
}

function ClinicLogo() {
  return (
    <div className="max-w-[223px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Clinic Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClinicLogo} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[116.97px]">
        <p className="leading-[22.5px]">Arcio Clinical</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[10px] tracking-[1px] uppercase w-[143.55px]">
        <p className="leading-[15px]">Precision Data Engine</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[143.55px]" data-name="Container">
      <Heading />
      <Container68 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] py-[16px] relative size-full">
          <ClinicLogo />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[73.84px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkActiveStateDashboard() {
  return (
    <div className="bg-gradient-to-r from-[#0369a1] relative rounded-[12px] shrink-0 to-[#0ea5e9] w-full" data-name="Link - Active State: Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(12,74,110,0.2),0px_4px_6px_-4px_rgba(12,74,110,0.2)]" data-name="Link - Active State: Dashboard:shadow" />
          <Container69 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
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

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[58.33px]">
        <p className="leading-[20px]">Services</p>
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
          <path d={svgPaths.p111d6a00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[52.69px]">
        <p className="leading-[20px]">Doctors</p>
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
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[54px]">
        <p className="leading-[20px]">Patients</p>
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
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pdbf5c00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
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
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
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

function Container80() {
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
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
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

function Container82() {
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
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
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

function Container85() {
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
          <Container84 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-h-[48px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[830px] relative size-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <LinkActiveStateDashboard />
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Margin5 />
      </div>
    </div>
  );
}

function AsideSideNavBarComponent() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(241,245,249,0.8)] h-[1378px] left-0 top-0 w-[256px] hidden" data-name="Aside - SideNavBar Component">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[16px] pr-[17px] py-[16px] relative rounded-[inherit] size-full">
        <Margin4 />
        <Nav />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Container">
          <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContextualFabSuppressedOnSubPagesShownHereAsItIsThePrimaryDashboard() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex items-center justify-center right-[32px] rounded-[16px] size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Button - Contextual FAB (Suppressed on sub-pages, shown here as it is the primary Dashboard)">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[64px]" data-name="Button - Contextual FAB (Suppressed on sub-pages, shown here as it is the primary Dashboard):shadow" />
      <Container86 />
    </div>
  );
}

export default function ArcioDashboardRedesigned() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start relative size-full min-h-screen" data-name="Arcio Dashboard (Redesigned)">
      <MainContentArea />
    </div>
  );
}
