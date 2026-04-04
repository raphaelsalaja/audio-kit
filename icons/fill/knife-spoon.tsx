import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KnifeSpoon({
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
          d="M6.25,16.5c-.414,0-.75-.336-.75-.75v-3.155l-2.238-1.92c-.172-.147-.268-.364-.262-.589,.05-1.874,.426-3.693,1.117-5.407,.401-.996,.909-1.954,1.511-2.847,.184-.274,.526-.395,.841-.298,.315,.096,.531,.387,.531,.717V15.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.625,5.625c0-2.274-1.514-4.125-3.375-4.125s-3.375,1.851-3.375,4.125c0,1.958,1.125,3.595,2.625,4.014v6.111c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6.111c1.5-.419,2.625-2.056,2.625-4.014Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default KnifeSpoon;
