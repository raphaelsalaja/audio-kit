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
          d="m14.25,2H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h3.9155c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-.6655V3.5h7.25c.6895,0,1.25.5605,1.25,1.25v2.4175c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.4175c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.7373,10.0986l-.3354-.3354c-.6602-.6611-1.813-.6616-2.4751-.0005l-3.1611,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.1821-.9072-.5127-1.2373Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SidebarEdit;
