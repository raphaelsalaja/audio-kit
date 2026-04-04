import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarEdit({
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
          d="m8.248,15.3906l.9209-2.6699c.1108-.3218.2964-.6177.5361-.8574l3.1611-3.1611c.5952-.5947,1.4326-.9351,2.2983-.9351.6609,0,1.3032.2009,1.8354.5588v-3.5759c0-1.5188-1.2312-2.75-2.75-2.75H3.75c-1.5187,0-2.75,1.2312-2.75,2.75v8.5c0,1.5188,1.2313,2.75,2.75,2.75h4.381c.0109-.2053.0484-.4106.1171-.6094Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.7373,10.0986l-.3354-.3354c-.6602-.6611-1.813-.6616-2.4751-.0005l-3.1611,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.1821-.9072-.5127-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,2h-3.25c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h3.25V2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SidebarEdit;
