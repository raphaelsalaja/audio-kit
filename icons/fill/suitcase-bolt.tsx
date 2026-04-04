import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseBolt({
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
          d="m11.75,5.5c-.4141,0-.75-.3359-.75-.75v-2.5c0-.1377-.1123-.25-.25-.25h-3.5c-.1377,0-.25.1123-.25.25v2.5c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2.5c0-.9648.7852-1.75,1.75-1.75h3.5c.9648,0,1.75.7852,1.75,1.75v2.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.3857,15.9702c-.6768-.1108-1.2734-.5269-1.6094-1.1401-.3965-.7231-.3652-1.603.0811-2.2969l2.25-3.5c.416-.647,1.124-1.0322,1.8945-1.0322.3262,0,.6416.0688.9385.2046.4764.2212.8372.595,1.0596,1.0361v-2.4917c0-1.5166-1.2334-2.75-2.75-2.75H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v6.5c0,1.5166,1.2334,2.75,2.75,2.75h8.6267l.009-.0298Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.4082,12.8906c-.1318-.2407-.3838-.3906-.6582-.3906h-1.6533l.6201-2.0308c.1104-.3584-.0615-.7422-.4014-.8999-.3379-.1548-.7432-.0405-.9463.2749l-2.25,3.5c-.1484.231-.1592.5244-.0273.7651s.3838.3906.6582.3906h1.6533l-.6201,2.0308c-.1104.3584.0615.7422.4014.8999.1016.0469.209.0693.3154.0693.248,0,.4893-.1235.6309-.3442l2.25-3.5c.1484-.231.1592-.5244.0273-.7651Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SuitcaseBolt;
