import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinPen({
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
          d="m7.8662,16.2642l.9209-2.6699c.1108-.3218.2964-.6177.5361-.8574l3.1616-3.1611c.5957-.5947,1.4331-.9351,2.2988-.9351.3048,0,.6013.0562.8896.137.0451-.3364.0767-.6775.0767-1.0276,0-3.7261-3.0219-6.75-6.75-6.75S2.25,4.0239,2.25,7.75c0,2.4966,1.2212,4.6648,2.5899,6.2417.689.7937,1.4307,1.4561,2.11,1.9561.2964.2183.5886.4099.8672.5718.0185-.085.0203-.1719.0491-.2554Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.25,7.75c0-1.5181,1.231-2.75,2.75-2.75s2.75,1.2319,2.75,2.75-1.231,2.75-2.75,2.75-2.75-1.2319-2.75-2.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m16.3557,10.972l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PinPen;
