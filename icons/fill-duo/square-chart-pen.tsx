import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartPen({
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
          d="m17.3731.9825l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-2.6398,2.6397c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l2.6397-2.6397c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.6272,2.502c-.1278.1776-.2295.3733-.3012.581l-.9206,2.67c-.2806.8132-.0728,1.7173.5365,2.326.4291.4288,1.0037.6584,1.5903.6584.2426,0,.4913-.039.7348-.1234l.0021-.0007,2.6683-.92c.021-.0072.0419-.0148.0626-.0227v6.0794c0,1.517-1.233,2.75-2.75,2.75H3.75c-1.517,0-2.75-1.233-2.75-2.75V5.252c0-1.517,1.233-2.75,2.75-2.75h6.8772Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4.75,13.5c.414,0,.75-.336.75-.75v-4.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.25c0,.414.336.75.75.75Zm3.25,0c.414,0,.75-.336.75-.75v-6.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.5c0,.414.336.75.75.75Zm3.25,0c.414,0,.75-.336.75-.75v-2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v2c0,.414.336.75.75.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareChartPen;
