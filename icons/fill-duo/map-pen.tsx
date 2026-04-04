import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPen({
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
          d="m6.1885,14.0399V2.0392c-.1292-.0004-.2583.0134-.3849.0414l-3.4329.7632c-.8008.1772-1.3706.8881-1.3706,1.7082v8.452c0,1.1197,1.0364,1.9512,2.1298,1.7081l3.0004-.6665c.0188-.0043.0384-.0062.0583-.0057Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9.7959,13.3496c.1108-.3218.2964-.6177.5361-.8574l1.486-1.4858V3.9602c-.0285,0-.0577-.0049-.086-.0151l-4.952-1.801c-.1912-.0693-.3914-.1042-.5915-.105v12.0007c.0265.0007.0534.0056.0795.0151l2.9185,1.0615.6094-1.7668Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m13.4932,9.3311c.5957-.5947,1.4331-.9351,2.2988-.9351.4179,0,.8276.0833,1.208.2319v-3.6318c0-1.1199-1.0364-1.9512-2.1298-1.7083l-3.0004.6665c-.0168.0039-.0342.0059-.0518.0059v7.0461l1.6752-1.6753Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m17.3644,10.7277l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MapPen;
