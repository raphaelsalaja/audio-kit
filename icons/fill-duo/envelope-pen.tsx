import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePen({
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
          d="m9.7983,13.6045c.1108-.3218.2964-.6177.5361-.8574l3.1616-3.1611c.5952-.5947,1.4326-.9351,2.2983-.9351.417,0,.8258.083,1.2056.2312v-3.6321c0-1.5193-1.2308-2.75-2.75-2.75H3.75c-1.5192,0-2.75,1.2307-2.75,2.75v7.5c0,1.519,1.2308,2.75,2.75,2.75h5.3945l.6538-1.8955Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m3.75,2.5c-1.5195,0-2.75,1.232-2.75,2.75,0,.2732.1485.5247.3877.6567l6.767,3.733c.5265.2903,1.164.2904,1.6905,0l6.7671-3.7331c.2392-.1319.3877-.3835.3877-.6567,0-1.518-1.2305-2.75-2.75-2.75H3.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m17.3669,10.9824l-.1677-.1677-.1677-.1677c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default EnvelopePen;
