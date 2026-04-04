import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight2({
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
          d="M2.70897 12.7295C3.00186 12.4366 3.47672 12.4366 3.76961 12.7295L5.76971 14.7295C5.91037 14.8701 5.9894 15.0609 5.9894 15.2598C5.9894 15.4587 5.91038 15.6495 5.76973 15.7901L5.36643 16.1934C5.12171 16.4381 4.77598 16.5536 4.43304 16.5046L1.80444 16.1291C0.904915 16.0006 0.538151 14.9003 1.18067 14.2578L2.70897 12.7295Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.5168 2.92166L13.7534 2.15799C12.9443 1.35001 11.674 1.28639 10.7913 1.96561C10.6709 2.05824 10.5666 2.16312 10.5005 2.22951C9.1791 3.55797 7.85301 4.88186 6.52693 6.20573C5.86611 6.86545 5.2053 7.52517 4.54507 8.18545C3.69063 9.04017 3.6668 10.4115 4.47566 11.2944C4.5104 11.3324 4.54601 11.3679 4.56858 11.3905C5.13952 11.9604 5.70973 12.5312 6.27992 13.1019C6.56419 13.3864 6.84847 13.6709 7.13283 13.9554C8.01144 14.8328 9.43583 14.8324 10.3144 13.955L16.3411 7.92792C17.2197 7.04905 17.2197 5.6253 16.3411 4.74643L15.5773 3.98246L10.9337 8.62605C10.6408 8.91894 10.166 8.91894 9.87308 8.62605C9.58019 8.33315 9.58019 7.85828 9.87308 7.56539L14.5168 2.92166Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextHighlight2;
