import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToStart({
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
          d="M18 5.37702C18 4.42163 16.9595 3.79363 16.113 4.30358C14.6668 5.17571 11.5123 7.07999 10.1013 7.93199C9.28479 8.42454 9.31198 9.59161 10.1045 10.0716L16.1085 13.6942C16.9455 14.1984 18 13.5896 18 12.623V5.37702Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.07354 4.3274C9.08607 4.31877 9.0989 4.3105 9.11201 4.3026C9.96075 3.79131 10.999 4.42427 10.999 5.37703V12.624C10.999 13.5906 9.94496 14.1996 9.10801 13.6955L3.1045 10.0716C2.31198 9.59162 2.2848 8.42456 3.10133 7.932C4.49972 7.08761 7.61028 5.20984 9.07354 4.3274Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.75 3.5C0.335786 3.5 0 3.83579 0 4.25V13.75C0 14.1642 0.335786 14.5 0.75 14.5C1.16421 14.5 1.5 14.1642 1.5 13.75V4.25C1.5 3.83579 1.16421 3.5 0.75 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaSkipToStart;
