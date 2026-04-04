import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Space3d({
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
          d="M16,6.527c0-.977-.524-1.888-1.37-2.379L10.38,1.683c-.421-.244-.892-.365-1.363-.368-.006,0-.011-.003-.017-.003s-.011,.003-.017,.003c-.471,.003-.942,.124-1.363,.368L3.369,4.148c-.845,.491-1.369,1.402-1.369,2.378v4.946c0,.486,.131,.956,.365,1.365,.001,.003,.001,.006,.003,.008,.003,.004,.007,.007,.01,.011,.236,.405,.574,.752,.992,.994l4.25,2.465c.426,.247,.902,.37,1.38,.37s.954-.123,1.38-.37l4.251-2.465c.42-.244,.759-.592,.996-1,.001-.002,.004-.003,.005-.005s.001-.005,.002-.007c.235-.41,.366-.88,.366-1.367V6.527Zm-2.123-1.082c.385,.223,.623,.638,.623,1.082v4.796l-4.75-2.755V3.052l4.127,2.394Zm-9.755,0l4.128-2.394v5.516l-4.75,2.755V6.527c0-.444,.238-.858,.622-1.081Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Space3d;
