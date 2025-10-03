import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    loading = false,
    disabled = false,
    children,
    href,
    size = "medium",
    className,
    icon,
    leftIcon = icon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const shouldDisabled = disabled || loading;
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: shouldDisabled,
    });

    const Component = href ? "a" : "button";

    const handleClick = (e) => {
        if (shouldDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        onClick(e);
    };

    return (
        <Component
            {...passProps}
            onClick={handleClick}
            href={href}
            className={clsx(classNames)}
        >
            <div
                className={clsx(styles.inner, {
                    [styles.hidden]: loading,
                })}
            >
                {leftIcon && (
                    <FontAwesomeIcon className={styles.icon} icon={leftIcon} />
                )}
                <span>{children}</span>
                {rightIcon && (
                    <FontAwesomeIcon className={styles.icon} icon={rightIcon} />
                )}
            </div>
            {loading && (
                <FontAwesomeIcon
                    className={styles.loading}
                    icon={faSpinner}
                    spin
                />
            )}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.object,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    onClick: PropTypes.func,
};

export default Button;
