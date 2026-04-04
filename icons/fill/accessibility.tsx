import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Accessibility({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle cx="9" cy="2.5" fill={secondaryfill} r="2" />
        <path
          d="M15.123,5.011c-4.033,.69-8.213,.69-12.246,0-.409-.071-.796,.204-.866,.613-.07,.408,.204,.796,.612,.866,1.28,.219,2.577,.364,3.877,.451v9.56c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.5h2v4.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V6.94c1.3-.086,2.597-.231,3.877-.451,.408-.07,.683-.458,.612-.866-.069-.409-.457-.684-.866-.613Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Accessibility;
