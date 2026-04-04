import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardPen({
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
          d="m9.543,12.8467c.1104-.3193.2939-.6143.5332-.8545l3.0674-3.0679c.5967-.5947,1.4336-.9351,2.2998-.9351.5515,0,1.5566.0107,1.5566.0107v-2.25c0-1.5193-1.2308-2.75-2.75-2.75H3.75c-1.5192,0-2.75,1.2307-2.75,2.75v6.5c0,1.519,1.2308,2.75,2.75,2.75h5.0502l.7427-2.1533Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path d="m17,6.5H1v1.5h16v-1.5Z" fill={fill} strokeWidth="0" />
        <path
          d="m3.5,11.25c0-.4142.3358-.75.75-.75h3c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-3c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m17.0151,10.321l-.3354-.3355c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.0649,3.0648c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.0648-3.0648c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CreditCardPen;
