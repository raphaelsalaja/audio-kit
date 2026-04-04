import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePen({
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
          d="m8.8784,16.0269l.9209-2.6699c.1108-.3218.2964-.6177.5361-.8574l3.1611-3.1611c.5957-.5947,1.4331-.9351,2.2988-.9351.0692,0,.1359.0156.2046.02v-1.6772c0-.5459-.2552-1.062-.6912-1.3933l-5.2497-3.9897c-.6259-.4766-1.4922-.4756-2.1179-.0002l-5.2497,3.9897c-.4357.3311-.6916.8462-.6916,1.3936v7.5039c0,1.519,1.2308,2.75,2.75,2.75h4.0411c-.0356-.3245-.0223-.6558.0873-.9731Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m17.3678,10.735l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HousePen;
