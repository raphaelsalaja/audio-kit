import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Code3({
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
          d="M5.72678 4.17104C6.04652 4.43436 6.09227 4.90703 5.82895 5.22677L2.72159 8.99999L5.82895 12.7732C6.09227 13.093 6.04652 13.5656 5.72678 13.8289C5.40704 14.0923 4.93437 14.0465 4.67105 13.7268L1.17105 9.47677C0.942983 9.19983 0.942983 8.80015 1.17105 8.52321L4.67105 4.27321C4.93437 3.95347 5.40704 3.90772 5.72678 4.17104Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.2732 4.17104C12.593 3.90772 13.0657 3.95347 13.329 4.27321L16.829 8.52321C17.057 8.80015 17.057 9.19983 16.829 9.47677L13.329 13.7268C13.0657 14.0465 12.593 14.0923 12.2732 13.8289C11.9535 13.5656 11.9078 13.093 12.1711 12.7732L15.2784 8.99999L12.1711 5.22677C11.9078 4.90703 11.9535 4.43436 12.2732 4.17104Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.4616 4.03049C10.859 4.14737 11.0864 4.56426 10.9695 4.96164L8.46954 13.4616C8.35266 13.859 7.93577 14.0864 7.53839 13.9695C7.14101 13.8527 6.91361 13.4358 7.03049 13.0384L9.53049 4.53839C9.64737 4.14101 10.0643 3.91361 10.4616 4.03049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Code3;
