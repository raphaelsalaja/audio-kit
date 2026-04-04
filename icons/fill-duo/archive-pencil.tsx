import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchivePencil({
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
          d="m15.2646,7.6748c-.2397.2397-.5361.4253-.8564.5361l-2.6719.9209c-.2334.0811-.4814.123-.7334.123-.6011,0-1.166-.2339-1.5908-.6592-.6045-.603-.8154-1.5161-.5361-2.3252l.9209-2.6699c.1108-.3218.2964-.6177.5361-.8574l.7432-.7432h-6.3262c-1.5195,0-2.75,1.2319-2.75,2.75v6.5c0,.4141.3358.75.75.75h2.75v2.5h7v-2.5h2.75c.4142,0,.75-.3359.75-.75v-4.3105l-.7354.7354Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12,11h4v2.25c0,1.517-1.233,2.75-2.75,2.75H4.75c-1.517,0-2.75-1.233-2.75-2.75v-2.25h4c.414,0,.75.336.75.75v1.5c0,.138.112.25.25.25h4c.138,0,.25-.112.25-.25v-1.5c0-.414.336-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.3652.9786l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArchivePencil;
