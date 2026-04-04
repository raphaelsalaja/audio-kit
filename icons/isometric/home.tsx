import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Home({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M10.4512 15.5982L6.05396 17.7307L6.21569 12.6863L7.87754 12.2303L9.65703 13.4951L10.4512 15.5982Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M5.69019 17.9641L10.4065 15.606" stroke={fill} />
        <path
          d="M15.5 22.8346V13L22 10V19.6669L15.5 22.8346Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M22 9.92639L15.5 13.1764" stroke={fill} />
        <path
          d="M15.5001 22.9999V12.9999L8.68273 3.96344L8.4571 3.66569"
          stroke={fill}
        />
        <path
          d="M2 7.2643V15.713C2 16.0936 2.21603 16.4412 2.55729 16.6097L5.27864 17.9533C5.61094 18.1174 6 17.8756 6 17.505V13.8651C6 12.4844 6.99729 11.8732 8.22752 12.5001C9.45774 13.1269 10.455 14.7543 10.455 16.135V19.8876C10.455 20.2682 10.6711 20.6158 11.0123 20.7843L14.8347 22.6715C15.254 22.8785 15.7458 22.8782 16.1648 22.6706L21.444 20.0548C21.7845 19.8861 22 19.5388 22 19.1588V10.4172C22 10.2041 21.9319 9.99654 21.8057 9.82483L16.0013 1.93008C15.5982 1.38181 14.8765 1.1736 14.2433 1.42287L2.95053 5.86856C2.37703 6.09434 2 6.64795 2 7.2643Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Home;
