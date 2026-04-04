import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToEnd({
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
          d="M0 5.37702C0 4.42163 1.04049 3.79363 1.88701 4.30358C3.33321 5.17571 6.48768 7.07999 7.89868 7.93199C8.71521 8.42454 8.68802 9.59161 7.89551 10.0716L1.89146 13.6942C1.05451 14.1984 0 13.5896 0 12.623V5.37702Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.92646 4.3274C8.91394 4.31877 8.90111 4.3105 8.88799 4.3026C8.03925 3.79131 7.00098 4.42427 7.00098 5.37703V12.624C7.00098 13.5906 8.05504 14.1996 8.89199 13.6955L14.8955 10.0716C15.688 9.59162 15.7152 8.42456 14.8987 7.932C13.5003 7.08761 10.3897 5.20984 8.92646 4.3274Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.25 3.5C17.6642 3.5 18 3.83579 18 4.25V13.75C18 14.1642 17.6642 14.5 17.25 14.5C16.8358 14.5 16.5 14.1642 16.5 13.75V4.25C16.5 3.83579 16.8358 3.5 17.25 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaSkipToEnd;
