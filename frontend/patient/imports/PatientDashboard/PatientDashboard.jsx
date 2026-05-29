import svgPaths from "./svg-hw2afj42ca";
import imgHospitalAnnouncement from "./af494f09703981d619bebf813793062a0e9ae7c9.png";
import imgDependentSwitcher from "./ec96b057b6ad403af13f101b90c44d82639c401c.png";
import imgUserAvatar from "./aae0b32faae0192ac5b2aae572d3feedd5c12de6.png";

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3b22eb80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.2),0px_4px_6px_-4px_rgba(6,182,212,0.2)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[123.8px]">
        <p className="leading-[28px]">Arcio Patient</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e7490] text-[10px] tracking-[1px] uppercase w-[103.05px]">
        <p className="leading-[15px]">Clinical Portal</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[123.8px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <Background />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container4() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[83.453px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" style={{ backgroundImage: "linear-gradient(167.853deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_11.15px_2.4px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.2),0px_4px_6px_-4px_rgba(6,182,212,0.2)]" data-name="Link:shadow" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[77.558px]">
        <p className="leading-[24px]">My Profile</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container6 />
      <Container7 />
    </div>
  );
}

function LinkCssTransform1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[107.042px]">
        <p className="leading-[24px]">Appointments</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container8 />
      <Container9 />
    </div>
  );
}

function LinkCssTransform2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[87.232px]">
        <p className="leading-[24px]">Documents</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container10 />
      <Container11 />
    </div>
  );
}

function LinkCssTransform3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.5">
        <g id="Container">
          <path d={svgPaths.p1f1be480} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[98.168px]">
        <p className="leading-[24px]">Vaccinations</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container12 />
      <Container13 />
    </div>
  );
}

function LinkCssTransform4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p2a8bfa60} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[91.589px]">
        <p className="leading-[24px]">Medical File</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container14 />
      <Container15 />
    </div>
  );
}

function LinkCssTransform5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link5 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
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

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[125.295px]">
        <p className="leading-[24px]">Announcements</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container16 />
      <Container17 />
    </div>
  );
}

function LinkCssTransform6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link6 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
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

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[62.768px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[12px] w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[77.558px]">
        <p className="leading-[24px]">My Profile</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[12px] w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[2.4px] items-start pb-[1.2px] pl-[5.58px] pr-[5.57px] pt-[18.2px] relative size-full">
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link7 />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-[113px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[677px] relative size-full">
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.4px] items-start pt-[1.2px] relative size-full">
        <LinkCssTransform />
        <LinkCssTransform1 />
        <LinkCssTransform2 />
        <LinkCssTransform3 />
        <LinkCssTransform4 />
        <LinkCssTransform5 />
        <LinkCssTransform6 />
        <Margin1 />
      </div>
    </div>
  );
}

function AsideSideNavBarExecutionFromJson() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] content-stretch flex flex-col gap-[8px] h-[1269px] items-start pl-[16px] pr-[17px] py-[16px] relative shrink-0 w-[256px] hidden" data-name="Aside - SideNavBar (Execution from JSON)">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1269px] left-0 shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)] top-0 w-[256px] hidden" data-name="Aside - SideNavBar (Execution from JSON):shadow" />
      <Margin />
      <Nav />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Patient Dashboard</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-tight relative shrink-0 text-[#171c1f] text-2xl tracking-[-0.75px] w-full">
        <p className="mb-1">
          <span className="">{`Hello, `}</span>
          <span className="text-[#006590]">John Sterling.</span>
        </p>
        <p className="text-base font-medium text-[#64748b] leading-tight">Your health summary at a glance.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <Container23 />
      <Heading1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#70787f] text-[12px] tracking-[0.6px] uppercase w-[98.67px]">
        <p className="leading-[16px]">Health Score</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] relative size-full">
        <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[40px] justify-center relative shrink-0 text-[#171c1f] text-xl w-[77.23px]">
          <p className="leading-[40px]">98%</p>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#006590] text-[14px] w-[51.59px]">
          <p className="leading-[20px]">Optimal</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dfe3e7] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-gradient-to-r from-[#006590] inset-[0_2%_0_0] to-[#85cbfd]" data-name="Gradient" />
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[#f0f4f8] flex-[1_0_0] h-full max-w-[320px] min-w-px relative rounded-[16px]" data-name="Background+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Overlay+Shadow" />
        <Container25 />
        <Paragraph />
        <Background1 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-[9/span_4] content-stretch flex h-[152px] items-start justify-end justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function HeroDataWelcomeSection() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_204px] relative shrink-0 w-full" data-name="Hero Data / Welcome Section">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[18px] w-[289.75px]">
        <p className="leading-[32px]">Upcoming Appointments</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p32ab500} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[14px] text-center w-[98.39px]">
        <p className="leading-[20px]">View Calendar</p>
      </div>
      <Container30 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Button />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#70787f] text-[12px] text-center tracking-[-0.6px] uppercase w-[24.19px]">
        <p className="leading-[16px]">OCT</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#006590] text-[24px] text-center w-[28.78px]">
        <p className="leading-[32px]">24</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start min-w-[70px] p-[16px] relative rounded-[12px] shrink-0 w-[70px]" data-name="Background+Shadow">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[18px] w-full">
        <p className="leading-[28px]">General Pediatric Checkup</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-full">
        <p className="leading-[20px]">Dr. Elena Kostic • 09:30 AM</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading3 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p37657300} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,101,144,0.1)] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Container36 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[12px] w-[60.7px]">
        <p className="leading-[16px]">Telehealth</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <BackgroundShadow />
          <Container34 />
          <Overlay />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#70787f] text-[12px] text-center tracking-[-0.6px] uppercase w-[24.81px]">
        <p className="leading-[16px]">NOV</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#70787f] text-[24px] text-center w-[25.41px]">
        <p className="leading-[32px]">12</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start min-w-[70px] p-[16px] relative rounded-[12px] shrink-0 w-[70px]" data-name="Overlay">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[18px] w-full">
        <p className="leading-[28px]">Dermatology Follow-up</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-full">
        <p className="leading-[20px]">{`Children's Hospital • 14:15 PM`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading4 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #70787F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eaeef2] opacity-60 relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <Overlay1 />
          <Container39 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container29 />
        <Container31 />
      </div>
    </div>
  );
}

function UpcomingAppointmentsHighlightCard() {
  return (
    <div className="backdrop-blur-[10px] bg-white col-[1/span_2] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Upcoming Appointments: Highlight Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[37.5px] pt-[33px] px-[33px] relative size-full">
          <div className="absolute bg-[rgba(0,101,144,0.05)] blur-[32px] right-[-47px] rounded-[9999px] size-[256px] top-[-47px]" data-name="Overlay+Blur" />
          <Container28 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[64px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[197.25px]">
        <p className="leading-[32px]">Next Vaccination</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[102.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[228.95px]">
        <p className="leading-[22.75px] mb-0">Leo is due for his Measles booster</p>
        <p className="leading-[22.75px]">in 12 days.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[149.5px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[30.75px] left-[3px] top-[5px] w-[28.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5 30.75">
          <path d={svgPaths.p38592b00} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <Heading5 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Due Date</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
          <p className="leading-[28px]">Nov 04, 2023</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[16px] text-center w-[136.58px]">
        <p className="leading-[24px]">Schedule Booster</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Button1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container44 />
    </div>
  );
}

function NextVaccinationGradientActionCard() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[24px] row-1 self-start shadow-[0px_25px_50px_-12px_rgba(6,182,212,0.2)] shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Next Vaccination: Gradient Action Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
          <Container42 />
          <div className="absolute bg-white inset-0 opacity-0" data-name="Background" />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-[185.31px]">
        <p className="leading-[28px]">Recent Documents</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #70787F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading6 />
        <Container48 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3bae3440} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container51 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-full">
        <p className="leading-[20px]">Lab_Results_Oct15.pdf</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-full">
        <p className="leading-[16px]">1.2 MB • Bloodwork</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading7 />
      <Container53 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Container52 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p27589980} fill="var(--fill-0, #004C6E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#c9e6ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container55 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-full">
        <p className="leading-[20px]">Chest_XRay_Scan.jpg</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-full">
        <p className="leading-[16px]">4.5 MB • Radiology</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading8 />
      <Container57 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <Container56 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #00567C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[12px] shrink-0 w-[31.77px]" data-name="Background">
      <Container59 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-full">
        <p className="leading-[20px]">Prescription_Augmentin.pdf</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-full">
        <p className="leading-[16px]">0.8 MB • Pharmacy</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading9 />
      <Container61 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Container60 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container50 />
        <Container54 />
        <Container58 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,101,144,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[14px] text-center w-[118px]">
          <p className="leading-[20px]">View All Archives</p>
        </div>
      </div>
    </div>
  );
}

function RecentDocumentsListCard() {
  return (
    <div className="backdrop-blur-[10px] bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0" data-name="Recent Documents: List Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <Container47 />
        <Container49 />
        <Button2 />
      </div>
    </div>
  );
}

function HospitalAnnouncement() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Hospital Announcement">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHospitalAnnouncement} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 size-[96px]" data-name="Overlay+Shadow">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 pointer-events-none rounded-[16px]" />
      <HospitalAnnouncement />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#006590] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase w-[23.86px]">
        <p className="leading-[15px]">New</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#70787f] text-[12px] w-[141.97px]">
        <p className="leading-[16px]">System Announcements</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[0.02px] top-0" data-name="Container">
      <Background7 />
      <Container64 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.02px] top-[27px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[233.56px]">
        <p className="leading-[28px]">Winter Flu Clinic Now Open</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[512px] right-[0.02px] top-[59px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[344.64px]">
        <p className="leading-[20px] mb-0">{`Protect your family this season. We've extended our`}</p>
        <p className="leading-[20px] mb-0">clinic hours until 8 PM for walk-in pediatric flu</p>
        <p className="leading-[20px]">vaccinations every Thursday.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[119px] min-w-px relative" data-name="Container">
      <Container63 />
      <Heading10 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[16px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container66 />
    </div>
  );
}

function AnnouncementsWideMessageCard() {
  return (
    <div className="bg-[#e4e9ed] col-[2/span_2] h-[396px] justify-self-stretch relative rounded-[24px] row-2 shrink-0" data-name="Announcements: Wide Message Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[32px] relative size-full">
          <OverlayShadow />
          <Container62 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function SectionBentoGridContent() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] relative shrink-0 w-full" data-name="Section - Bento Grid Content">
      <UpcomingAppointmentsHighlightCard />
      <NextVaccinationGradientActionCard />
      <RecentDocumentsListCard />
      <div className="col-span-3">
        <AnnouncementsWideMessageCard />
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="relative content-stretch flex flex-col gap-[32px] items-start w-full max-w-[1280px] p-[16px]" data-name="Page Content">
      <HeroDataWelcomeSection />
      <SectionBentoGridContent />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(203,213,225,0.3)] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function DependentSwitcher() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Dependent Switcher">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDependentSwitcher} />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[104.58px]">
        <p className="leading-[20px]">Leo Richardson</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.31667">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Background">
      <DependentSwitcher />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Margin3 />
      <Background8 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#ba1a1a] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] right-0 rounded-[9999px] shadow-[0px_0px_0px_2px_#f1f5f9] size-[8px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container73 />
      <Background9 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="User Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dfe3e7] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container71 />
      <UserAvatar />
    </div>
  );
}

function HeaderTopAppBarExecutionFromJson() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] content-stretch flex items-center justify-between left-0 px-[32px] py-[16px] right-0 top-0 hidden" data-name="Header - TopAppBar (Execution from JSON)">
      <Container67 />
      <Container70 />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-1 min-w-px relative self-stretch" data-name="Main Canvas">
      <PageContent />
      <div className="h-[48px] w-full" data-name="Footer Padding" />
    </div>
  );
}

export default function PatientDashboard() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start relative w-full min-h-screen" data-name="Patient Dashboard">
      <MainCanvas />
    </div>
  );
}

