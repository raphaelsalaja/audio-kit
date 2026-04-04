import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Msgs({
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
          d="M12.4991 7.74841C14.7077 7.74841 16.4995 9.53761 16.4995 11.7463C16.4995 12.4742 16.3022 13.1541 15.9627 13.7425C15.7254 14.1869 15.992 15.2383 16.4995 15.7467C15.8098 15.784 14.9015 15.472 14.4953 15.2099C14.226 15.3654 13.7976 15.5716 13.2377 15.6783C12.9986 15.7236 12.7515 15.7476 12.4991 15.7476C10.2896 15.7476 8.49951 13.9567 8.49951 11.748C8.49951 9.53929 10.2904 7.74841 12.4991 7.74841Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.3181 4.75089C11.2329 3.24959 9.47131 2.26971 7.47751 2.26971C4.17641 2.26971 1.50012 4.94601 1.50012 8.24811C1.50012 9.33511 1.79482 10.3522 2.30292 11.2306C2.65692 11.8956 2.25982 13.4668 1.50012 14.2255C2.53062 14.281 3.88931 13.816 4.49501 13.4227C4.81311 13.6063 5.27912 13.8376 5.87282 14.0045"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.4999 7.7467C14.7085 7.7467 16.4995 9.53761 16.4995 11.7463C16.4995 12.4742 16.3022 13.1541 15.9627 13.7425C15.7254 14.1869 15.992 15.2383 16.4995 15.7467C15.8098 15.784 14.9015 15.472 14.4953 15.2099C14.226 15.3654 13.7976 15.5716 13.2377 15.6783C12.9986 15.7236 12.7515 15.7476 12.4991 15.7476C10.2896 15.7476 8.49951 13.9567 8.49951 11.748C8.49951 9.53929 10.2912 7.7467 12.4999 7.7467Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Msgs;
