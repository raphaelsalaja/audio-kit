import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Npm({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "npm",
  ...props
}: IconProps) {
  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d="M0 256V0h256v256H0z" fill="#C12127" />
      <path d="M48 48v160h80V80h48v128h32V48H48z" fill="#fff" />
    </svg>
  );
}

export default Npm;
