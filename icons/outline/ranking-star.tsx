import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RankingStar({
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
        <path
          d="M7.75,7.75h2.5c.552,0,1,.448,1,1v6.5H6.75v-6.5c0-.552,.448-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25,11.75h3.5v3.5H3.25c-.552,0-1-.448-1-1v-1.5c0-.552,.448-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25,10.25h3.5c.552,0,1,.448,1,1v3c0,.552-.448,1-1,1h-3.5v-5h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.776,1.994c-.059-.181-.215-.313-.403-.34l-1.329-.193-.595-1.204c-.168-.342-.729-.342-.896,0l-.595,1.204-1.33,.193c-.188,.027-.345,.159-.403,.34-.059,.181-.01,.379,.127,.512l.962,.938-.228,1.324c-.032,.188,.045,.377,.199,.489,.087,.063,.19,.096,.294,.096,.08,0,.159-.019,.232-.058l1.189-.625,1.188,.625c.168,.089,.372,.074,.526-.038,.154-.112,.231-.302,.199-.489l-.228-1.324,.962-.938c.137-.133,.186-.332,.127-.512Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default RankingStar;
