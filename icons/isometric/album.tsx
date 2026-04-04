import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album({
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
          d="M11.7898 21.196L8.56268 14.7458L12 17.5652L11.7898 21.196Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19 17.5V9L22 7.5V16L19 17.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 21.5V13L15 11.5V20L12 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M15 11.5L12 13" stroke={fill} />
        <path d="M19 9L21.7037 7.64813" stroke={fill} />
        <path
          d="M2 8L11.4472 12.7236C11.786 12.893 12 13.2393 12 13.618V21.2969"
          stroke={fill}
        />
        <path
          d="M9 4L18.4472 8.72361C18.786 8.893 19 9.23926 19 9.61803V17.3137"
          stroke={fill}
        />
        <path d="M8 14L11.5957 21.2115" stroke={fill} />
        <path
          d="M4 17.5L7.89278 14.058C7.93031 14.0248 7.98661 14.0245 8.02448 14.0573L12 17.5"
          stroke={fill}
        />
        <path
          d="M3.98241 12.0089C4.00697 11.4415 4.42836 11.2013 4.92362 11.4725C5.41887 11.7437 5.80046 12.4236 5.7759 12.9911C5.75135 13.5586 5.32996 13.7987 4.8347 13.5275C4.33944 13.2563 3.95786 12.5764 3.98241 12.0089Z"
          fill={fill}
        />
        <path
          d="M15 15.5L18.3292 17.1646C18.7515 17.3758 19.2485 17.3758 19.6708 17.1646L21.4472 16.2764C21.786 16.107 22 15.7608 22 15.382V8.11803C22 7.73926 21.786 7.393 21.4472 7.22361L12.6708 2.83541C12.2485 2.62426 11.7515 2.62426 11.3292 2.83541L9.55279 3.72361C9.214 3.893 9 4.23926 9 4.61803V8.5"
          stroke={fill}
        />
        <path
          d="M2 15.573V8.61803C2 8.23926 2.214 7.893 2.55279 7.72361L4.32918 6.83541C4.75147 6.62426 5.24853 6.62426 5.67082 6.83541L14.4472 11.2236C14.786 11.393 15 11.7393 15 12.118V19.382C15 19.7608 14.786 20.107 14.4472 20.2764L12.6708 21.1646C12.2485 21.3758 11.7515 21.3758 11.3292 21.1646L2.82918 16.9146C2.321 16.6605 2 16.1411 2 15.573Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Album;
